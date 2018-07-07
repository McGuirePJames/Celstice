using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Selstice.Data;
using System.Threading.Tasks;

namespace Selstice.Service
{
	public interface IProductPriceHistoryService
	{
		void AddProductPriceHistory(ProductPriceHistory productPriceHistory);
		List<ProductPriceHistory> GetAllProductPriceHistory();
		Task<ProductPriceHistory> GetProductPriceHistory(long id);
		void UpdateProductPriceHistory(ProductPriceHistory productPriceHistory);
		void DeleteProductPriceHistory(ProductPriceHistory productPriceHistory);
	}
}
