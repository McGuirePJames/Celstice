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
	[Route("/api/[controller]")]
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
		[Route("/api/[controller]/Add")]
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

		[HttpPost]
		[AllowAnonymous]
		[Route("/api/[controller]/Get/{id}")]
		public IActionResult GetProduct(long id)
		{
			ProductViewModel model = new ProductViewModel();
			Product product = productService.GetProduct(id);
			if (product != null)
			{
				model.Name = product.Name;
				model.Description = product.Description;
				model.Price = product.Price;
			}
			return new ObjectResult(product);
		}

		[HttpGet]
		[AllowAnonymous]
		[Route("/api/[controller]/Update{id}")]
		public IActionResult Update(long id)
		{
			Product product = productService.GetProduct(id);
			if(product != null)
			{
				productService.UpdateProduct(product);
				return new OkResult();
			}
			return new BadRequestResult();
		}
	}
}