import { Module } from '@nestjs/common';
import { CarPlateController } from './car-plate.controller';
import { CarPlateService } from './car-plate.service';
import { CarPlateRepository } from './car-plate.repository';

@Module({
  controllers: [CarPlateController],
  providers: [CarPlateService, CarPlateRepository],
})
export class CarPlateModule {
}
