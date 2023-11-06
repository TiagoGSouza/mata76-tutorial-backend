import { Body, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityRepository } from 'src/repositories/activity-repository';

@Injectable()
export class ActivitiesService {
  constructor(
    private activityRepository: ActivityRepository
  ) {}

  async create(@Body() createActivityDto: CreateActivityDto) {
    const {user, date, startTime, endTime, status} = createActivityDto
    var stTime: number = +startTime
    var edTime: number = +endTime
    await this.activityRepository.create(user, date, stTime, edTime, status);
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

  async update(id: number, createActivityDto: UpdateActivityDto) {
    const {user, date, startTime, endTime, status} = createActivityDto
    var stTime: number = +startTime
    var edTime: number = +endTime
    await this.activityRepository.update(id, user, date, stTime, edTime, status);
  }

  async remove(id: number) {
    await this.activityRepository.remove(id);
  }
}
