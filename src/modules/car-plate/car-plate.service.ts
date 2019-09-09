import { Injectable } from '@nestjs/common';
import { CarPlateRepository } from './car-plate.repository';
import { CarPlateModel, CarPlateResponse } from './models/car-plate.interface';

@Injectable()
export class CarPlateService {
  constructor(private carPlateRepository: CarPlateRepository) {
  }

  findAll(searchText = '', page, limit): CarPlateResponse {
    const carPlates = searchText && searchText.length > 0 ?
      this.carPlateRepository.findAllByText(searchText) :
      this.carPlateRepository.findAll();
    page = this.resolveStringParam(page, 1);
    limit = this.resolveStringParam(limit, 10);

    const totalPages = this.countPagesAmount(carPlates, limit);
    if (page <= totalPages && page > 0) {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      return {
        carPlates: carPlates.slice(startIndex, endIndex),
        totalPages,
        totalElements: carPlates.length,
      };
    }

    return {
      carPlates: [],
      totalPages: 0,
      totalElements: 0,
    };
  }

  addOne(carPlate: CarPlateModel): boolean {
    if (this.isCarPlateNumberInDatabase(carPlate.carPlateNumber)) {
      return false;
    }

    return this.carPlateRepository.addOne(carPlate);
  }

  findOneById(id: string): CarPlateModel {
    return this.carPlateRepository.findOneById(id);
  }

  updateOne(carPlate: CarPlateModel): boolean {
    if (this.isCarPlateNumberDuplicated(carPlate.carPlateNumber)) {
      return false;
    }

    return this.carPlateRepository.updateOne(carPlate);
  }

  removeOneById(id: string): boolean {
    return this.carPlateRepository.removeOneById(id);
  }

  private isCarPlateNumberInDatabase(carPlateNumber: string): boolean {
    console.log(carPlateNumber, !!this.carPlateRepository.findOneByCarPlateNumber(carPlateNumber));
    return !!this.carPlateRepository.findOneByCarPlateNumber(carPlateNumber);
  }

  isCarPlateNumberDuplicated(carPlateNumber) {
    const duplicats = this.carPlateRepository.findAllByCarPlateNumber(carPlateNumber);

    return duplicats.length > 1;
  }

  private countPagesAmount(dataArray: CarPlateModel[], limit: number): number {
    if (dataArray && dataArray.length > 0 && limit) {
      return Math.ceil(dataArray.length / limit);
    }

    return 0;
  }

  private resolveStringParam(param, defaultValue) {
    if (!param) {
      return defaultValue;
    }

    if (typeof param === 'string') {
      return parseInt(param, 10);
    }

    return param;
  }
}
