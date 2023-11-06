import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/activities.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ActivitiesModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
