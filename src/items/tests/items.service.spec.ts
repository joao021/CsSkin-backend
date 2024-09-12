import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from '../items.service';
import { PrismaService } from '../../prisma.service';

describe('ItemsService', () => {
  let service: ItemsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsService, PrismaService],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return items with correct filters', async () => {
    const findManySpy = jest.spyOn(prisma.item, 'findMany').mockResolvedValue([
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
    ]);

    const filters = {
      name: 'AK',
      floatMin: 0.1,
      floatMax: 0.3,
      priceMin: 50,
      priceMax: 150,
      category: 'rifle',
    };

    const result = await service.getItems(filters);

    expect(findManySpy).toHaveBeenCalledWith({
      where: {
        name: { contains: 'AK', mode: 'insensitive' },
        float: { gte: 0.1, lte: 0.3 },
        price: { gte: 50, lte: 150 },
        category: 'rifle',
      },
      orderBy: undefined,
    });

    expect(result).toEqual([
      {
        id: '1',
        name: 'AK-47',
        float: '0.2',
        price: 100,
        category: 'rifle',
        image: 'some-image-url',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      },
    ]);
  });

  it('should throw error if floatMin is greater than floatMax', async () => {
    const filters = {
      floatMin: 0.5,
      floatMax: 0.2,
    };

    await expect(service.getItems(filters)).rejects.toThrow(
      'floatMin cannot be greater than floatMax',
    );
  });

  it('should throw error if priceMin is greater than priceMax', async () => {
    const filters = {
      priceMin: 200,
      priceMax: 100,
    };

    await expect(service.getItems(filters)).rejects.toThrow(
      'priceMin cannot be greater than priceMax',
    );
  });
});
