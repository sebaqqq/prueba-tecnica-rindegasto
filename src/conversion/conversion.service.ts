import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

export interface ConversionResponse {
  result: number;
  rate: number;
  from: string;
  to: string;
  amount: number;
}

@Injectable()
export class ConversionService {
  private readonly apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('EXCHANGE_API_KEY') ?? '';
  }

  async convert(
    from: string,
    to: string,
    amount: number,
  ): Promise<ConversionResponse> {
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${this.apiKey}/pair/${from}/${to}/${amount}`,
      );

      const { conversion_result: result, conversion_rate: rate } =
        response.data as { conversion_result: number; conversion_rate: number };

      return {
        result,
        rate,
        from,
        to,
        amount,
      };
    } catch (error) {
      console.error(
        'Error al convertir:',
        (error as any).response?.data || (error as any).message,
      );
      throw new HttpException(
        'Error al realizar la conversión de moneda',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
