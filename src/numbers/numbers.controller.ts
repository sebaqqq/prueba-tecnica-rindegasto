import { Controller, Get, Query } from '@nestjs/common';
import { NumbersService } from './numbers.service';

@Controller('numbers')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Get('getTheNumber')
  async getTheNumber(
    @Query('first') first: number,
    @Query('second') second: number,
  ): Promise<{ result: string }> {
    return this.numbersService.calculateConcatenatedProduct(first, second);
  }
}
