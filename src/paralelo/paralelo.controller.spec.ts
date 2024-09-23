import { Test, TestingModule } from '@nestjs/testing';
import { ParaleloController } from './paralelo.controller';
import { ParaleloService } from './paralelo.service';

describe('ParaleloController', () => {
  let controller: ParaleloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParaleloController],
      providers: [ParaleloService],
    }).compile();

    controller = module.get<ParaleloController>(ParaleloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
