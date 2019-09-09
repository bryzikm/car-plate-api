export interface CarPlateModel {
  id?: string;
  firstName: string;
  lastName: string;
  carPlateNumber: string;
}

export interface CarPlateResponse {
  carPlates: CarPlateModel[];
  totalPages: number;
  totalElements: number;
}
