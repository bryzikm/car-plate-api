import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CarPlateService } from './car-plate.service';
import { CarPlateModel } from './models/car-plate.interface';
import { Response } from 'express';

@Controller('car-plates')
export class CarPlateController {

  constructor(private readonly carPlateService: CarPlateService) {
  }

  @Get()
  getAll(@Res() res: Response,
         @Query('searchText') searchText,
         @Query('page') page,
         @Query('limit') limit) {
    const carPlatesResponse = this.carPlateService.findAll(searchText, page, limit);

    return res.status(HttpStatus.OK).json(carPlatesResponse);
  }

  @Post()
  addCarPlate(@Res() res: Response,
              @Body('carPlate') carPlate: CarPlateModel) {
    const addStatus = this.carPlateService.addOne(carPlate);

    return addStatus ? res.status(HttpStatus.OK).send()
      : res.status(HttpStatus.FORBIDDEN).send('Object with given car plate number already exists');
  }

  @Put()
  updateCarPlate(@Res() res: Response,
                 @Body('carPlate') carPlate: CarPlateModel) {
    const updateStatus = this.carPlateService.updateOne(carPlate);

    return updateStatus ? res.status(HttpStatus.OK).send()
      : res.status(HttpStatus.NOT_FOUND).send('Cannot find object to update');
  }

  @Delete(':id')
  removeCarPlate(@Res() res: Response,
                 @Param('id') id) {
    const removeStatus = this.carPlateService.removeOneById(id);

    return removeStatus ? res.status(HttpStatus.OK).send()
      : res.status(HttpStatus.NOT_FOUND).send('Cannot find object to remove');
  }

  @Get(':id')
  getOneById(@Res() res: Response,
             @Param('id') id) {
    const carPlate = this.carPlateService.findOneById(id);

    return carPlate ? res.status(HttpStatus.OK).json({ carPlate })
      : res.status(HttpStatus.NOT_FOUND).send('Object not found');
  }
}
