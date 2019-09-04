import { Module } from '@nestjs/common';
import { CarPlateController } from './car-plate.controller';
import { CarPlateService } from './car-plate.service';

@Module({
  controllers: [CarPlateController],
  providers: [CarPlateService]
})
export class CarPlateModule {}
