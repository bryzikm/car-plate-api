import { Test, TestingModule } from '@nestjs/testing';
import { CarPlateService } from './car-plate.service';

describe('CarPlateService', () => {
  let service: CarPlateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarPlateService],
    }).compile();

    service = module.get<CarPlateService>(CarPlateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
