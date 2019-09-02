namespace ReactTemplate.Config
{
    public interface IAppSettings
    {
        HostingConfig HostingConfig { get; set; }
    }

    public class HostingConfig
    {
        public string[] Urls { get; set; }
        public bool UseHttps { get; set; }
    }
}
