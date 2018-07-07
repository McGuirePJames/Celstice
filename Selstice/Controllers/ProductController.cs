using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Selstice.Data;
using Selstice.Repo;
using Selstice.Service;
using Selstice.Web.ViewModels;

namespace Selstice.Web.Controllers
{
	[Route("api/[controller]")]
	public class ProductController : Controller
    {
		private readonly IProductService productService;
		private readonly IProductPriceHistoryService productPriceHistoryService;

		public ProductController(IProductService productService, IProductPriceHistoryService productPriceHistoryService)
		{
			this.productService = productService;
			this.productPriceHistoryService = productPriceHistoryService;
		}
		public IActionResult Index()
		{
			List<ProductViewModel> model = new List<ProductViewModel>();
			model = productService.GetAllProducts().Select(a =>
			new ProductViewModel
			{
				Id = a.Id,
				Name = a.Name,
				Description = a.Description
			}).ToList();
			return new ObjectResult(model);
		}

		[HttpPost]
		[AllowAnonymous]
		public ActionResult AddProduct(Product productArg)
		{
			Product product = new Product
			{
				Name = productArg.Name,
				Description = productArg.Description,
				CreatedOn = DateTime.Now,
				ModifiedOn = DateTime.Now,
				Price = productArg.Price,
			};
			productService.AddProduct(product);

			return Ok();
		}

		[HttpGet]
		[Route("/api/[controller]/[Action]")]
		public async Task<IActionResult> Get(long id)
		{
			ProductViewModel model = new ProductViewModel();
			Product product = await productService.GetProduct(id);
			if (product != null)
			{
				model.Name = product.Name;
				model.Description = product.Description;
				model.Price = product.Price;
			}
			return new ObjectResult(product);
		}

		[HttpPost]
		[AllowAnonymous]
		public async Task<IActionResult> Update(long id)
		{
			Product product = await productService.GetProduct(id);
			if(product != null)
			{
				productService.UpdateProduct(product);
				return new OkResult();
			}
			return new BadRequestResult();
		}
	}
}