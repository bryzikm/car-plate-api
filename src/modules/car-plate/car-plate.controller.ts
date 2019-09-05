import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarPlateService } from './car-plate.service';

interface CarPlateDTO {
  id?: string;
  firstName: string;
  lastName: string;
  carPlateNumber: string;
}

@Controller('car-plate')
export class CarPlateController {

  constructor(private readonly carPlateService: CarPlateService) {
  }

  @Get()
  getAll() {
    return this.carPlateService.findAll();
  }

  @Post()
  addCarPlate(@Body('carPlate') carPlate: CarPlateDTO) {
    return [1, 2, 3];
  }

  @Put()
  updateCarPlate(@Body('carPlate') carPlate: CarPlateDTO) {
    return [1, 2, 3];
  }

  @Delete(':id')
  removeCarPlate(@Param('id') id) {
    return 'removed';
  }

  @Get(':id')
  getOneById(@Param('id') id) {
    return id;
  }
}
