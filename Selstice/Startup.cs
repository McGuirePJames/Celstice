using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using React.AspNet;
using React;
using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;
using Selstice.Data;
using Microsoft.EntityFrameworkCore;
using Selstice.Repo;
using Selstice.Service;

namespace Selstice
{
	public class Startup
	{
		private string _selsticeDbString = null;
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		public IServiceProvider ConfigureServices(IServiceCollection services)
		{
			_selsticeDbString = Configuration["SelsticeDb:ConnectionString"];
			services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
			services.AddReact();
			services.AddMvc();
			//services.AddProgressiveWebApp();
			services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
			services.AddResponseCompression(options =>
			{
				options.EnableForHttps = true;
				options.Providers.Add<GzipCompressionProvider>();
			});
			//DI
			services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(_selsticeDbString));
			services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
			services.AddTransient<IProductService, ProductService>();
			services.AddTransient<IProductPriceHistoryService, ProductPriceHistoryPriceHistoryService>();

			return services.BuildServiceProvider();
		}
		public IServiceCollection ConfigureDepencyInjection(IServiceCollection services)
		{

			return services;
		}
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			app.UseResponseCompression();
			ReactSiteConfiguration.Configuration = new ReactSiteConfiguration().AddScript("~/Scripts/Home/ParticlesServer.jsx");
			if (env.IsDevelopment())
			{
				app.UseBrowserLink();
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}
			app.UseReact(config =>
			{
			});
			app.UseStaticFiles(new StaticFileOptions
			{
				OnPrepareResponse = content =>
				{
					if (content.File.Name.EndsWith(".js.gz"))
					{
						content.Context.Response.Headers.Append("Content-Type", "text/javascript");
						content.Context.Response.Headers.Append("Content-Encoding", "gzip");
					}
					else if (content.File.Name.EndsWith(".css.gz"))
					{
						content.Context.Response.Headers.Append("Content-Type", "text/css");
						content.Context.Response.Headers.Append("Content-Encoding", "gzip");
					}

				}
			});

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");

			});
		}
	}
}
