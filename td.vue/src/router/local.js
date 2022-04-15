import { providerTypes } from '../service/provider/providerTypes.js';

const providerType = providerTypes.local;

export const localRoutes = [
    {
        path: `/${providerType}/:threatmodel`,
        name: `${providerType}ThreatModel`,
        component: () => import(/* webpackChunkName: "threatmodel" */ '../views/ThreatModel.vue')
    },
    {
        path: `/${providerType}/:threatmodel/upgrade`,
        name: `${providerType}Upgrade`,
        component: () => import(/* webpackChunkName: "upgrade" */ '../views/Upgrade.vue')
    },
    {
        path: `/${providerType}/:threatmodel/edit`,
        name: `${providerType}ThreatModelEdit`,
        component: () => import(/* webpackChunkName: "threatmodel-edit" */ '../views/ThreatModelEdit.vue')
    },
    {
        path: `/${providerType}/:threatmodel/edit/:diagram`,
        name: `${providerType}DiagramEdit`,
        component: () => import(/* webpackChunkName: "diagram-edit" */ '../views/Diagram.vue')
    },
    {
        path: `/${providerType}/threatmodel/new`,
        name: `${providerType}NewThreatModel`,
        component: () => import(/* webpackChunkName: "new-threatmodel" */ '../views/NewThreatModel.vue')
    },
    {
        path: `/${providerType}/threatmodel/import`,
        name: `${providerType}ThreatModelImport`,
        component: () => import(/* webpackChunkName: "threatmodel-import" */ '../views/Import.vue')
    },
    {
        path: `/${providerType}/:threatmodel/report`,
        name: `${providerType}Report`,
        component: () => import(/* webpackChunkName: "report" */ '../views/Report.vue')
    }
];