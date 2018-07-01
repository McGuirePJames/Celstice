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

namespace Selstice
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		//     public void ConfigureServices(IServiceCollection services)
		//     {
		//services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
		//services.AddReact();
		//services.AddMvc();
		//     }
		public IServiceProvider ConfigureServices(IServiceCollection services)
		{
			services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
			services.AddReact();
			services.AddMvc();
			//services.AddResponseCompression(options =>
			//{
			//	options.Providers.Add<GzipCompressionProvider>();
			//	options.MimeTypes =
			//		ResponseCompressionDefaults.MimeTypes.Concat(
			//			new[] { "application/javascript", "text/css" });
			//});
			services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
			services.AddResponseCompression(options =>
			{
				options.EnableForHttps = true;
				// options.MimeTypes = new string[] { "multipart/form-data", "application/pdf" };
				options.Providers.Add<GzipCompressionProvider>();
			});
			return services.BuildServiceProvider();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
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
				// If you want to use server-side rendering of React components,
				// add all the necessary JavaScript files here. This includes
				// your components as well as all of their dependencies.
				// See http://reactjs.net/ for more information. Example:
				//config
				//  .AddScript("~/Scripts/First.jsx")
				//  .AddScript("~/Scripts/Second.jsx");

				// If you use an external build too (for example, Babel, Webpack,
				// Browserify or Gulp), you can improve performance by disabling
				// ReactJS.NET's version of Babel and loading the pre-transpiled
				// scripts. Example:
				//config
				//  .SetLoadBabel(false)
				//  .AddScriptWithoutTransform("~/Scripts/bundle.server.js");
			});
			app.UseStaticFiles(new StaticFileOptions
			{
				//OnPrepareResponse = content =>
				//{
				//	if (content.File.Name.EndsWith(".js.gz"))
				//	{
				//		content.Context.Response.Headers["Content-Type"] = "text/javascript";
				//	}
				//	else if (content.File.Name.EndsWith(".css.gz"))
				//	{
				//		content.Context.Response.Headers["Content-Type"] = "text/css";
				//	}
				//	content.Context.Response.Headers["Content-Encoding"] = "gzip";
				//}
				OnPrepareResponse = content =>
				{
					if (content.File.Name.EndsWith(".js.gz"))
					{
						content.Context.Response.Headers.Append("Content-Type", "text/javascript");
					}
					else if (content.File.Name.EndsWith(".css.gz"))
					{
						content.Context.Response.Headers.Append("Content-Type", "text/css");
					}
					content.Context.Response.Headers.Append("Content-Encoding", "gzip");
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
