import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./employees.component').then((m) => m.EmployeesComponent),
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadComponent: () =>
          import('./employees-list/employees-list.component').then(
            (m) => m.EmployeesListComponent
          ),
      },
    ],
  },
];
