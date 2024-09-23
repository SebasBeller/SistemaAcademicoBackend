import { Test, TestingModule } from '@nestjs/testing';
import { ParaleloService } from './paralelo.service';

describe('ParaleloService', () => {
  let service: ParaleloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParaleloService],
    }).compile();

    service = module.get<ParaleloService>(ParaleloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
