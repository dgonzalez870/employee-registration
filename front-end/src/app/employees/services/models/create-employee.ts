export interface CreateEmployee {
  first_surname: string;
  second_surname: string;
  first_name: string;
  other_names?: string;
  id_code: string;
  id_document_id: number;
  country_id: number;
  job_area_id: number;
  admission_date: Date;
}
