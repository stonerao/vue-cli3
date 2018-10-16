let navs: any[] = [{
    name: "OVERVIEW",
    icon: 'icon-header-tongji',
    path: '/index'
},
{
    name: "ASSET",
    children: [{
        name: "Details of Digital Assets",
        path: "/assetAllocation",
    },
    {
        name: "Screen monitoring",
        path: "/screenMonitoring",
    },
    ],
    icon: "icon-header-biaoshilei_yuanchengpeizhi"
},
{
    name: "MONITORING",
    children: [{
        name: "Traffic Monitoring",
        path: "/flowAnalysis",
    },
    {
        name: "Service Monitoring",
        path: "/serviceMonitoring/pandect",
    },
    ],
    icon: "icon-header-mubiao"
},
{
    name: "Vulnerability",
    children: [
        {
            name: "Scann Setting",
            path: "/loophole",
        },
        {
            name: "Vulnerability Query",
            path: "/loopholeQuery",
        },
    ],
    icon: "icon-header-mubiao"
},
{
    name: "EVENT",
    icon: "icon-header-leida",
    children: [
        {
            name: "Log",
            path: "/log",
        },
        {
            name: "Alert",
            path: "/alarmQuery",
        },
        {
            name: "Incident",
            path: "/accident",
        },
    ]
},
{
    name: "WORKORDER",
    icon: "icon-header-touzijilu-blue",
    children: [{
        name: "Work Order",
        path: "/orders",
    },]
},
{
    name: "KNOWLEDGE",
    children: [{
        name: "Ontology Library",
        path: "/ontology",
    },
    ],
    icon: "icon-header-wenjian1"
},
{
    name: "ADMIN",
    icon: 'icon-header-character-avatar',
    children: [{
        name: "Role",
        path: "/roleManage",
    },
    {
        name: "Account",
        path: "/userManage",
    }]
}]
export default navs