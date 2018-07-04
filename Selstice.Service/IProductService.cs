using Selstice.Data;
using System.Collections.Generic;


namespace Selstice.Service
{
	public interface IProductService
	{
		List<Product> GetAllProducts();
		void AddProduct(Product product);
		Product GetProduct(long id);
		void UpdateProduct(Product product);
		List<Product> GetProducts();
	}
}
