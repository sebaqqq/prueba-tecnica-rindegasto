import { Controller, Get, Query } from '@nestjs/common';
import { BirthdayService, Rindegastino } from './birthdays.service';

@Controller('birthday')
export class BirthdayController {
  constructor(private readonly birthdayService: BirthdayService) {}

  @Get('getDaysUntilMyBirthday')
  async getDaysUntilMyBirthday(
    @Query('name') name: string,
    @Query('birthdate') birthdate: string,
  ): Promise<{ name: string; daysUntilBirthday: number }> {
    return this.birthdayService.registerAndCalculate(name, birthdate);
  }

  @Get('getRindegastinosBirthdays')
  async getRindegastinosBirthdays(): Promise<Rindegastino[]> {
    return this.birthdayService.getAllRindegastinos();
  }
}
