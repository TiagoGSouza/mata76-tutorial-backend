import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post('register')
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto);
  }

  @Get()
  findAll(){
    return this.activitiesService.findAll();
  }

  @Get('filter')
  findByDate(@Body() body: any) {
    return this.activitiesService.findByDate(body);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.activitiesService.findOne(+id);
  }

  @Patch('update/'+':id')
  update(@Param('id') id: number, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activitiesService.update(+id, updateActivityDto);
  }

  @Delete('delete/'+':id')
  remove(@Param('id') id: number) {
    return this.activitiesService.remove(+id);
  }
}
