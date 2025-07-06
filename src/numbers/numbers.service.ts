import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class NumbersService {
  calculateConcatenatedProduct(
    first: number,
    second: number,
  ): { result: string } {
    if (!first || !second) {
      throw new HttpException(
        'Ambos números son obligatorios.',
        HttpStatus.BAD_REQUEST,
      );
    }

    let concatenated = '';
    for (let i = 1; i <= second; i++) {
      concatenated += (first * i).toString();

      if (concatenated.length >= 9) {
        concatenated = concatenated.slice(0, 9);
        break;
      }
    }

    return { result: concatenated };
  }
}
