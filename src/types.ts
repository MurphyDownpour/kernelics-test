export interface Employee {
  id: number;
  name: string;
  status: EmployeeStatus;
  img: string;
}

export enum EmployeeStatus {
  Working = 'Working',
  BusinessTrip = 'Business Trip',
  OnVacation = 'On Vacation',
}
