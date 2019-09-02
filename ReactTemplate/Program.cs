using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

using ReactTemplate.Config;

namespace ReactTemplate
{
    public class Program
    {
        public static IAppSettings AppSettings;

        public static void Main(string[] args)
        {
            IConfiguration configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json", false, false).Build();

            AppSettings = new AppSettings(configuration);

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseUrls(AppSettings.HostingConfig.Urls); // This doesn't do anything at the moment
    }
}
