import { Module } from '@nestjs/common';
import { BirthdayController } from './birthdays.controller';
import { BirthdayService } from './birthdays.service';

@Module({
  controllers: [BirthdayController],
  providers: [BirthdayService],
})
export class BirthdayModule {}
