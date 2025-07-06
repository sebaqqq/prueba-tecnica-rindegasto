import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConversionModule } from './conversion/conversion.module';
import { BirthdayModule } from './birthdays/birthday.module';
import { NumbersModule } from './numbers/numbers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConversionModule,
    BirthdayModule,
    NumbersModule,
  ],
})
export class AppModule {}
