import { Module } from '@nestjs/common';
import { UsersService } from './activities.service';
import { ActivitiesController } from './activities.controller';

@Module({
  controllers: [ActivitiesController],
  providers: [UsersService],
})
export class ActivitiesModule {}
