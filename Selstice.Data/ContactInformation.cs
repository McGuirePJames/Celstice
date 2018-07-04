using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Selstice.Data
{
	public class ContactInformation : BaseEntity
	{
		public string EmailAddress { get; set; }
		public string Message { get; set; }
	}
}
