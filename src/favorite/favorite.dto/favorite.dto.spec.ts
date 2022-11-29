import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteDto } from './favorite.dto';

describe('FavoriteDtoController', () => {
  let controller: FavoriteDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteDto],
    }).compile();

    controller = module.get<FavoriteDto>(FavoriteDto);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
