import { SelectOptions } from '../../../../lib/select-multiple';
import { SelectServiceResponse } from '../models/select-service-response';

export function selectServiceResponse2Selectoptions(
  data: SelectServiceResponse
): SelectOptions {
  return {
    value: data.id,
    label: data.name,
  };
}
