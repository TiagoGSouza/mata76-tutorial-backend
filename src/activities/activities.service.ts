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
    await this.activityRepository.create(user, date, startTime, endTime, status);
    // await this.activityRepository.create("teste", "23/09/2023", 1756, 1956, "Não iniciado");
    // return 'This action adds a new activity';
  }

  findAll() {
    return `This action returns all activities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    const {date, startTime, endTime} = updateActivityDto;
    await this.activityRepository.update(id, date, startTime, endTime);
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
