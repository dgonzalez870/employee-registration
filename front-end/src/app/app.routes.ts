import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employees',
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.routes').then((m) => m.routes),
  },
];
