using Microsoft.Extensions.Configuration;

namespace ReactTemplate.Config
{
    public class AppSettings : IAppSettings
    {
        public static AppSettings Instance;

        public AppSettings(IConfiguration configuration)
        {
            if (Instance != null) return;

            Instance = this;
            configuration.GetSection(nameof(AppSettings)).Bind(this);
        }

        public HostingConfig HostingConfig { get; set; }
    }
}
