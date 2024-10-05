import { Test, TestingModule } from '@nestjs/testing';
import { InscripcionController } from './inscripcion.controller';
import { InscripcionService } from './inscripcion.service';

describe('InscripcionController', () => {
  let controller: InscripcionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InscripcionController],
      providers: [InscripcionService],
    }).compile();

    controller = module.get<InscripcionController>(InscripcionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
