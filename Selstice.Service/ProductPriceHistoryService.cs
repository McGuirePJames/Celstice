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
	public class ProductPriceHistoryPriceHistoryService : IProductPriceHistoryService
	{
		private IRepository<ProductPriceHistory> productPriceHistoryRepository;

		public ProductPriceHistoryPriceHistoryService(IRepository<ProductPriceHistory> productPriceHistoryRepositoryRepository)
		{
			productPriceHistoryRepository = productPriceHistoryRepositoryRepository;
		}
		public List<ProductPriceHistory> GetAllProductPriceHistory()
		{
			return productPriceHistoryRepository.GetQueryable().Include(b => b.Product).ToList();
		}

		public void AddProductPriceHistory(ProductPriceHistory productPriceHistory)
		{
			productPriceHistoryRepository.Insert(productPriceHistory);
		}

		public async Task<ProductPriceHistory> GetProductPriceHistory(long id)
		{
			return await productPriceHistoryRepository.Get(id);
		}

		public void UpdateProductPriceHistory(ProductPriceHistory productPriceHistory)
		{
			productPriceHistoryRepository.Update(productPriceHistory);
		}

		public void DeleteProductPriceHistory(ProductPriceHistory productPriceHistory)
		{
			productPriceHistoryRepository.Delete(productPriceHistory);
		}
	}
}
