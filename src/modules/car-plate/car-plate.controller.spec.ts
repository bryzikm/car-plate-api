import { Test, TestingModule } from '@nestjs/testing';
import { CarPlateController } from './car-plate.controller';

describe('CarPlate Controller', () => {
  let controller: CarPlateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarPlateController],
    }).compile();

    controller = module.get<CarPlateController>(CarPlateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
