using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Selstice.Repo
{
	public interface IRepository<T>
	{
		IQueryable<T> GetAll();
		Task<T> Get(long id);
		IQueryable<T> GetQueryable(long id);
		IQueryable<T> GetQueryable();
		void Insert(T entity);
		void Update(T entity);
		void Delete(T entity);
	}
}
