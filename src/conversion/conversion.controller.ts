import { Controller, Get, Query } from '@nestjs/common';
import { ConversionService, ConversionResponse } from './conversion.service';

@Controller('conversion')
export class ConversionController {
  constructor(private readonly conversionService: ConversionService) {}

  @Get()
  async convert(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('amount') amount: number,
  ): Promise<ConversionResponse> {
    return this.conversionService.convert(from, to, amount);
  }
}
