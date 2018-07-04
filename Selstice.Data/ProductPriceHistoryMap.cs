using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Selstice.Data
{
	public class ProductPriceHistoryMap
	{
		public ProductPriceHistoryMap(EntityTypeBuilder<ProductPriceHistory> entityBuilder)
		{
			entityBuilder.HasKey(t => t.Id);
			entityBuilder.Property(t => t.Price).IsRequired();
			entityBuilder.Property(t => t.CreatedOn).IsRequired();
			entityBuilder.Property(t => t.ModifiedOn).IsRequired();	
		}
	}
}
