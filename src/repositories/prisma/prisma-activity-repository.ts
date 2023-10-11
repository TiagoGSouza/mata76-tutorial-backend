import { PrismaService } from "src/database/prisma.service";
import { ActivityRepository } from "../activity-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaActivityRepository implements ActivityRepository {
    constructor(private prisma: PrismaService) {}
    
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