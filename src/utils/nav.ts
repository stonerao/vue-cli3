const navs: any[] = [{
    name: "OVERVIEW",
    icon: 'icon-tongji',
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
    icon: "icon-biaoshilei_yuanchengpeizhi"
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
    icon: "icon-mubiao"
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
    icon: "icon-mubiao"
},
{
    name: "EVENT",
    icon: "icon-leida",
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
    icon: "icon-touzijilu-blue",
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
    icon: "icon-wenjian1"
},
{
    name: "ADMIN",
    icon: 'icon-character-avatar',
    children: [{
        name: "Role",
        path: "/roleManage",
    },
    {
        name: "Account",
        path: "/userManage",
    }]
}]