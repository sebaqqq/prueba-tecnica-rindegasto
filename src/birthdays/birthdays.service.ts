import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

export interface Rindegastino {
  name: string;
  birthdate: string;
  daysUntilBirthday: number;
}

@Injectable()
export class BirthdayService {
  private rindegastinos: Rindegastino[] = [];

  registerAndCalculate(
    name: string,
    birthdate: string,
  ): { name: string; daysUntilBirthday: number } {
    if (!name || !birthdate) {
      throw new HttpException(
        'Nombre y fecha de nacimiento son obligatorios.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const daysUntilBirthday = this.calculateDaysUntilBirthday(birthdate);

    const rindegastino: Rindegastino = { name, birthdate, daysUntilBirthday };
    this.rindegastinos.push(rindegastino);

    return { name, daysUntilBirthday };
  }

  private calculateDaysUntilBirthday(birthdate: string): number {
    const today = new Date();
    const birthDate = new Date(birthdate);

    const nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate(),
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  getAllRindegastinos(): Rindegastino[] {
    return this.rindegastinos;
  }
}
