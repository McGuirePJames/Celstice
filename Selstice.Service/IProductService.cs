using Selstice.Data;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace Selstice.Service
{
	public interface IProductService
	{
		List<Product> GetAllProducts();
		void AddProduct(Product product);
		Task<Product> GetProduct(long id);
		void UpdateProduct(Product product);
		List<Product> GetProducts();
	}
}
