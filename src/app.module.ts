import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarPlateModule } from './modules/car-plate/car-plate.module';

@Module({
  imports: [
    CarPlateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
