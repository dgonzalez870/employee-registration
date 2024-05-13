import { CreateEmployee } from './create-employee';

export interface GetEmployeeResponse extends CreateEmployee {
  email: string;
  created_at: Date;
  updated_at: Date;
}
