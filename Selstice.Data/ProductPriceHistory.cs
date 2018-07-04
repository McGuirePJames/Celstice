using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Selstice.Data
{
	public class ProductPriceHistory : BaseEntity
	{
		public Product Product { get; set; }
		public double Price { get; set; }
	}
}
