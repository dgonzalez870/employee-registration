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
      {
        path: 'form',
        loadComponent: () =>
          import('./employee-form/employee-form.component').then(
            (m) => m.EmployeeFormComponent
          ),
      },
      {
        path: 'form/:id',
        loadComponent: () =>
          import('./employee-form/employee-form.component').then(
            (m) => m.EmployeeFormComponent
          ),
      },
    ],
  },
];
