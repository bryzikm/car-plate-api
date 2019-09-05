import { Injectable } from '@nestjs/common';
import { CarPlateRepository } from './car-plate.repository';

@Injectable()
export class CarPlateService {
  constructor(private carPlateRepository: CarPlateRepository) {
  }

  findAll(): any {
    return this.carPlateRepository.findAll();
  }
}
