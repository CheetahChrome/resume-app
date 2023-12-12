export enum TechStack {
    Angular = "Angular",
    APIM = "APIM",
    AspNetSPA = "Asp.Net SPA (Single Page Application)",
    AWS = "Amazon Web Services (AWS)",
    Azure = "Azure",
    AzureAPIManager = "Azure API Manager",
    AzureAppService = "Azure App Service",
    AzureSearchService = "Azure Search Service",    
    AzureB2C = "Azure B2C",
    AzureSQLServer = "Azure SQL Server",
    B2C = "B2C",
    Blazor = "Blazor",
    CSharp = "C#",
    CSV = "CSV",
    Durandal = "Durandal",
    EntityFramework = "Entity Framework",
    EpicEHS = "Epic based EHS (Electronic Healthcare System)",
    Functions = "Functions",
    HTTPS = "HTTPS",
    IIS = "IIS",
    IOS = "IOS",
    JavaScript = "JavaScript",
    JSON = "JSON",
    JWT = "JWT tokens",
    KnockoutJs = "Knockout.Js",
    Material = "Material",
    MVC = "MVC",
    Net = ".Net",
    NetCore = ".Net Core",
    OracleSQL = "Oracle SQL",
    PowerShell = "PowerShell",
    Python = "Python",
    ServiceBus = "Service Bus",
    SignalR = "SignalR",
    SQL = "SQL",
    SQLServerAzure = "SQL Server Azure",
    SQLServerCompactEdition = "SQL Server Compact Edition",
    TDD = "TDD (Test Driven Development)",
    TypeScript = "TypeScript",
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
