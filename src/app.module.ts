import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesModule } from './users/activities.module';

@Module({
  imports: [ActivitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
