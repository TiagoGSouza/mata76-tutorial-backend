import { PrismaService } from "src/database/prisma.service";
import { ActivityRepository } from "../activity-repository";
import { Injectable } from "@nestjs/common";
import { Activity } from "src/activities/entities/activity.entity";

@Injectable()
export class PrismaActivityRepository implements ActivityRepository {
    constructor(private prisma: PrismaService) {}
    
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

    async create(user: string, date: string, startTime: number, endTIme: number, status: string): Promise<void> {
        await this.prisma.activity.create({
            data:{
                user,
                date,
                startTime,
                endTIme,
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

    async update(id: number, date: string, startTime: number, endTime: number): Promise<void> {
        await this.prisma.activity.update({
            where: {
                id: id,
            },
            data: {
                date: date,
                startTime: startTime,
                endTIme: endTime
            }
        });
    }
}