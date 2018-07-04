using Microsoft.EntityFrameworkCore;
using Selstice.Data;
using Selstice.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Selstice.Service
{
	public class ProductService : IProductService
	{
		private IRepository<Product> productRepository;

		public ProductService(IRepository<Product> productRepository)
		{
			this.productRepository = productRepository;
		}

		public List<Product> GetAllProducts()
		{
			return productRepository.GetQueryable().Include(c => c.PriceHistory).ToList();
		}
		public List<Product> GetProducts()
		{
			return productRepository.GetAll().ToList();
		}

		public void AddProduct(Product product)
		{
			productRepository.Insert(product);
		}

		public Product GetProduct(long id)
		{
			return productRepository.Get(id);
		}

		public void UpdateProduct(Product product)
		{
			productRepository.Update(product);
		}
	}
}
