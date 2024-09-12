import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetItemsFilterDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'Nome da skin' })
  name?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(1)
  @ApiPropertyOptional({ description: 'Float mínimo (0.0 - 1.0)' })
  floatMin?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(1)
  @ApiPropertyOptional({ description: 'Float máximo (0.0 - 1.0)' })
  floatMax?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @ApiPropertyOptional({ description: 'Preço mínimo' })
  priceMin?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @ApiPropertyOptional({ description: 'Preço máximo' })
  priceMax?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'Categoria da skin' })
  category?: string;
}
