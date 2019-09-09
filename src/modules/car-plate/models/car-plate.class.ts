import { CarPlateModel } from './car-plate.interface';
import * as uuid from 'uuid/v1';

export class CarPlate implements CarPlateModel {
  id = '';
  firstName = '';
  lastName = '';
  carPlateNumber = '';

  constructor(firstName: string,
              lastName: string,
              carPlateNumber: string) {
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.carPlateNumber = carPlateNumber;
  }
}
