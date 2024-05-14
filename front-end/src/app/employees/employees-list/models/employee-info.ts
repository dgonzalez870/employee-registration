export interface EmployeeInfo {
  id: number;
  name: string;
  email: string;
  jobArea: string;
  country: string;
  document: string;
  idCode: string;
}

export interface EmployeePagination {
  currentPage: number;
  totalPages: number;

  employees: EmployeeInfo[];
}
