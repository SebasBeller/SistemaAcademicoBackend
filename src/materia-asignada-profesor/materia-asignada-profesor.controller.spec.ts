import { Test, TestingModule } from '@nestjs/testing';
import { MateriaAsignadaProfesorController } from './materia-asignada-profesor.controller';
import { MateriaAsignadaProfesorService } from './materia-asignada-profesor.service';

describe('MateriaAsignadaProfesorController', () => {
  let controller: MateriaAsignadaProfesorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MateriaAsignadaProfesorController],
      providers: [MateriaAsignadaProfesorService],
    }).compile();

    controller = module.get<MateriaAsignadaProfesorController>(MateriaAsignadaProfesorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
