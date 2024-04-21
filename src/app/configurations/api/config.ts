export const App = {
  baseUrl: "http://fgtsalvo.int-gcp.fulcrumgt.com",

  services: {
    dashboard: "/api/getdashboardData",
    clients: "/api/clients",
    jobs: "/salvoeBridge/api/r1/getstatusData",
    jobsCount: "/salvoeBridge/api/r1/getjobCounts",
    settings: "/api/settings",
    updateSettings: "/api/updatesettings",
    website: "/api/create",
    jobDetails: "/salvoeBridge/api/r1/getjobDataDetails?jobid",
    createJob: "/salvoeBridge/api/r1/requeststatus",
    manageJob: "/api/managejob",
    fileData: "/api/fileData",
    files:"/api/files",
    jobsData: "/salvoeBridge/api/r1/getstatusData",
    outputData: "/salvoeBridge/api/r1/getOutputData",
    submit:"/salvoeBridge/api/r1/submit",
  },
};
