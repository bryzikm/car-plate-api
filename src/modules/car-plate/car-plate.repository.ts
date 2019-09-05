import { Injectable } from '@nestjs/common';

class CarPlate {
  id: string;
  firstName: string;
  lastName: string;
  carPlateNumber: string;

  constructor(id: string,
              firstName: string,
              lastName: string,
              carPlateNumber: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.carPlateNumber = carPlateNumber;
  }
}

@Injectable()
export class CarPlateRepository {
  private readonly CAR_PLATES = [
    new CarPlate(new Date().getTime().toString(), 'John', 'Doe', 'KR 12345'),
  ];

  constructor() {
  }

  findAll() {
    return this.CAR_PLATES;
  }
}
