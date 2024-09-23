import { Test, TestingModule } from '@nestjs/testing';
import { MateriaAsignadaProfesorService } from './materia-asignada-profesor.service';

describe('MateriaAsignadaProfesorService', () => {
  let service: MateriaAsignadaProfesorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MateriaAsignadaProfesorService],
    }).compile();

    service = module.get<MateriaAsignadaProfesorService>(MateriaAsignadaProfesorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
