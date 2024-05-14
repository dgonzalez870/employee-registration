export interface EmployeeItem {
  id: number;
  first_surname: string;
  second_surname: string;
  first_name: string;
  other_names: string;
  id_document: string;
  email: string;
  id_code: string;
  country: string;
  job_area: string;
  admission_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface SearchEmployeesResponse {
  employees: EmployeeItem[];
  totalPages: number;
  page: number;
}
