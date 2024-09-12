import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from '../items.controller';
import { ItemsService } from '../items.service';
import { PrismaService } from '../../prisma.service';

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService, PrismaService],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return items with correct filters', async () => {
    const filters = {
      name: 'AK',
      floatMin: 0.1,
      floatMax: 0.3,
      priceMin: 50,
      priceMax: 150,
      category: 'rifle',
    };

    const mockItems = [
      {
        id: '1',
        name: 'AK-47',
        float: '0.2',
        price: 100,
        category: 'rifle',
        image: 'some-image-url',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(service, 'getItems').mockResolvedValue(mockItems);

    const result = await controller.getFilteredItems(filters);

    expect(result).toEqual(mockItems);
  });

  it('should throw error if floatMin is greater than floatMax', async () => {
    const filters = {
      floatMin: 0.5,
      floatMax: 0.2,
    };

    await expect(service.getItems(filters)).rejects.toThrow('floatMin cannot be greater than floatMax');
  });

  it('should throw error if priceMin is greater than priceMax', async () => {
    const filters = {
      priceMin: 200,
      priceMax: 100,
    };

    await expect(service.getItems(filters)).rejects.toThrow('priceMin cannot be greater than priceMax');
  });
});
