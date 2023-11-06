import { Body, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { ActivityRepository } from 'src/repositories/activity-repository';

@Injectable()
export class ActivitiesService {
  constructor(
    private activityRepository: ActivityRepository
  ) {}

  async create(@Body() createActivityDto: CreateActivityDto) {
    const {user, date, startTime, endTime, status} = createActivityDto
    await this.activityRepository.create(user, date, startTime, endTime, status);
  }

  async findOne(id: number){
    const activity = this.activityRepository.findOne(id);
    return activity;
  }

  async findAll(){
    const activities = this.activityRepository.findAll();
    return activities;
  }

  async findByDate(@Body() body: any) {
    const date = body.date;
    const activities = this.activityRepository.findByDate(date);
    return activities;
  }

  async update(id: number, createActivityDto: CreateActivityDto) {
    const {user, date, startTime, endTime, status} = createActivityDto
    await this.activityRepository.update(id, user, date, startTime, endTime, status);
  }

  async remove(id: number) {
    await this.activityRepository.remove(id);
  }
}
