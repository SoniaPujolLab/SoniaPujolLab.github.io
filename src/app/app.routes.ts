import { Routes } from '@angular/router';
const SITE_NAME = 'Sonia Pujol Lab';
export const routes: Routes = [
    {
        path: '',
        title: SITE_NAME,
        loadComponent: () => import('./pages/projects/projects').then((m) => m.ProjectsPage),
    },
    {
        path: 'members',
        title: `Members - ${SITE_NAME}`,
        loadComponent: () => import('./pages/members/members').then((m) => m.MembersPage),
    },
    {
        path: 'contact',
        title: `Contact - ${SITE_NAME}`,
        loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactPage),
    },
    { path: '**', redirectTo: '' },
];
