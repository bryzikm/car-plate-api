import { Injectable } from '@nestjs/common';
import { CarPlate } from './models/car-plate.class';
import { CarPlateModel } from './models/car-plate.interface';

// Represents repository object that is automatically generated by NestJS ORM library.
// It is only mock file that replace real database connection
@Injectable()
export class CarPlateRepository {
  private CAR_PLATES = [
    new CarPlate('John', 'Doe', 'KR1000'),
    new CarPlate('Jack', 'Sparrow', 'KR1001'),
    new CarPlate('Meg', 'Swallow', 'KR1002'),
    new CarPlate('Robert', 'De Niro', 'KR1003'),
    new CarPlate('Nicolas', 'Cage', 'KR1004'),
    new CarPlate('Meg', 'Ryan', 'KR1005'),
    new CarPlate('Britney', 'Spears', 'KR1006'),
    new CarPlate('Danzel', 'Washington', 'KR1007'),
    new CarPlate('Sylvester', 'Stallone', 'KR1008'),
    new CarPlate('Mick', 'Jagger', 'KR1009'),
    new CarPlate('Emily', 'Remmington', 'KR1010'),
    new CarPlate('Thomas', 'Tuchel', 'KR1011'),
    new CarPlate('Cristiano', 'Ronaldo', 'KR1012'),
    new CarPlate('Lionel', 'Messi', 'KR1013'),
    new CarPlate('Raul', 'Gonzales', 'KR1014'),
    new CarPlate('Zinedine', 'Zidane', 'KR1015'),
    new CarPlate('Xabi', 'Alonso', 'KR1016'),
    new CarPlate('Vinicius', 'Junior', 'KR1017'),
    new CarPlate('Sergio', 'Ramos', 'KR1018'),
    new CarPlate('Eden', 'Hazard', 'KR1019'),
    new CarPlate('Tylor', 'Swift', 'KNT1020'),
  ];

  findAll() {
    return this.CAR_PLATES;
  }

  addOne(carPlate: CarPlateModel): boolean {
    const carPlateToAdd = new CarPlate(carPlate.firstName,
      carPlate.lastName,
      carPlate.carPlateNumber);
    this.CAR_PLATES.push(carPlateToAdd);

    return true;
  }

  findOneById(id: string): CarPlateModel {
    if (id) {
      return this.CAR_PLATES.find(carPlate => carPlate.id === id);
    }

    return null;
  }

  findOneByCarPlateNumber(carPlateNumber: string): CarPlateModel {
    if (carPlateNumber) {
      return this.CAR_PLATES.find(carPlate => carPlate.carPlateNumber === carPlateNumber);
    }

    return null;
  }

  findAllByCarPlateNumber(carPlateNumber: string): CarPlateModel[] {
    if (carPlateNumber) {
      return this.CAR_PLATES.filter(carPlate => carPlate.carPlateNumber === carPlateNumber);
    }

    return [];
  }

  findAllByText(searchText: string) {
    searchText = searchText.toLowerCase();

    return this.CAR_PLATES.filter(carPlate =>
      carPlate.firstName.toLowerCase().includes(searchText) ||
      carPlate.lastName.toLowerCase().includes(searchText) ||
      carPlate.carPlateNumber.toLowerCase().includes(searchText));
  }

  updateOne(carPlate: CarPlateModel): boolean {
    const carPlateToUpdate = this.findOneById(carPlate.id);

    if (carPlateToUpdate) {
      carPlateToUpdate.firstName = carPlate.firstName;
      carPlateToUpdate.lastName = carPlate.lastName;
      carPlateToUpdate.carPlateNumber = carPlate.carPlateNumber;

      return true;
    }

    return false;
  }

  removeOneById(id: string): boolean {
    const carPlateToRemove = this.findOneById(id);

    if (carPlateToRemove) {
      this.CAR_PLATES = this.CAR_PLATES.filter(carPlate => carPlate.id !== id);

      return true;
    }

    return false;
  }
}
