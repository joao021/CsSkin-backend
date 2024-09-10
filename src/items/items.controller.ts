import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { GetItemsFilterDto } from './dto/get-item.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getFilteredItems(@Query() filterDto: GetItemsFilterDto) {
    return this.itemsService.getItems(filterDto);
  }
}
