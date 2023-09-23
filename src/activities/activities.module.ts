import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ActivityRepository } from 'src/repositories/activity-repository';
import { PrismaActivityRepository } from 'src/repositories/prisma/prisma-activity-repository';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService, PrismaService,
  {
    provide: ActivityRepository,
    useClass: PrismaActivityRepository
  }],
})
export class ActivitiesModule {}
