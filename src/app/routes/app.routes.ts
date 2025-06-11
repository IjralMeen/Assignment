import { Routes } from '@angular/router';

export const routes: Routes = [
        {
        path: '',
        loadComponent: () => import('@pages/dashboard/dashboard').then(m => m.Dashboard),
        data: {
            isSidebar: 1,
            isHeader: 1,
        }
    },
];
