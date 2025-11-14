import { IsNumber } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  limit: number;
  @IsNumber()
  offset: number;
}
