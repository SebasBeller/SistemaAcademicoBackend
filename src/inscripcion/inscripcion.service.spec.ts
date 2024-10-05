import { Test, TestingModule } from '@nestjs/testing';
import { InscripcionService } from './inscripcion.service';

describe('InscripcionService', () => {
  let service: InscripcionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InscripcionService],
    }).compile();

    service = module.get<InscripcionService>(InscripcionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
