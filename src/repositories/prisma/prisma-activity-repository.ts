import { PrismaService } from "src/database/prisma.service";
import { ActivityRepository } from "../activity-repository";
import { Injectable } from "@nestjs/common";
import { Activity } from "src/activities/entities/activity.entity";

@Injectable()
export class PrismaActivityRepository implements ActivityRepository {
    constructor(private prisma: PrismaService) {}
    
    async findOne(id: number): Promise<Activity> {
        const activity = await this.prisma.activity.findUnique({
            where: {
                id: id
            },
        });
        return activity;
    }
    
    async findAll(): Promise<Activity[]> {
        const activities = await this.prisma.activity.findMany();
        return activities;
    }

    async findByDate(data: any): Promise<Activity[]> {
        const activities = await this.prisma.activity.findMany({
            where: {
                date: {
                    equals: data,
                },
            },
        });
        return activities;
    }

    async create(user: string, date: string, startTime: string, endTime: string, status: string): Promise<void> {
        if(startTime === ''){
            status = "Não iniciada";
        }
        else if (endTime === ''){
            status = "Iniciada";
        }
        else {
            status = "Finalizada";
        }
        await this.prisma.activity.create({
            data:{
                user,
                date,
                startTime,
                endTime,
                status
            },
        });
    }

    async remove(id: number): Promise<void> {
        await this.prisma.activity.delete({
            where: {
                id: id
            }
        });
    }

    async update(id: number, user: string, date: string, startTime: string, endTime: string, status: string): Promise<void> {
        if(startTime === ''){
            status = "Não iniciada";
        }
        else if (endTime === ''){
            status = "Iniciada";
        }
        else {
            status = "Finalizada";
        }
        await this.prisma.activity.update({
            where: {
                id: id,
            },
            data:{
                user,
                date,
                startTime,
                endTime,
                status
            },
        });
    }
}