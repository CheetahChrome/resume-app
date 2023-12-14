export enum TechStack {
    Angular = "Angular",
    Android = "Android",
    APIM = "APIM",
    API = "API",
    AspNetSPA = "Asp.Net SPA (Single Page Application)",
    AWS = "Amazon Web Services (AWS)",
    AzureAPIManager = "Azure API Manager",
    AzureAppService = "Azure App Service",
    AzureSearchService = "Azure Search Service",    
    AzureB2C = "Azure B2C",
    Azure = "Azure",
    
    AzureSQLServer = "Azure SQL Server",
    B2C = "B2C",
    Blazor = "Blazor",
    BusinessIntelligence = "Business Intelligence",
    CSharp = "C#",
    CSV = "CSV",
    DataFactory = "Data Factory",
    DevOps = "DevOps",
    Durandal = "Durandal",
    EntityFramework = "Entity Framework",
    EpicEHS = "Epic based EHS (Electronic Healthcare System)",
    Functions = "Functions",
    GraphQL = "GraphQL",
    HTTPS = "HTTPS",
    IIS = "IIS",
    IOS = "IOS",
    JavaScript = "JavaScript",
    JSON = "JSON",
    JWT = "JWT",
    KnockoutJs = "Knockout.Js",
    Material = "Material",
    MVC = "MVC",
    NetCore = ".Net Core",
    Net = ".Net",
    OracleSQL = "Oracle SQL",
    Oracle = "Oracle",
    PowerShell = "PowerShell",
    Python = "Python",
    ServiceBus = "Service Bus",
    SignalR = "SignalR",
    SOA = "SOA",
    SMS = "SMS",
    SQL = "SQL",
    SQLServer = "SQL Server",    
    SQLServerAzure = "SQL Server Azure",
    SQLServerCompactEdition = "SQL Server Compact Edition",
    TDD = "TDD",
    Terraform = "Terraform",
    TypeScript = "TypeScript",
    VSTO = "VSTO",
    WebServices = "Web Services",
    WCF = "WCF",
    Xamarin = "Xamarin"
}

// export interface Job {
//    company: string;
//    duration: string;
//    title: string;
//    tekstack: TechStack[];
//    responsibilities: string[];
// }

export interface JobDescription
{
    responsibilty: string;
    techstack: TechStack[];
}

export interface Job {
  company: string;
  duration: string;
  title: string;
  techstack: TechStack[];
  responsibilities: JobDescription[];
}
