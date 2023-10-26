import { Activity } from "src/activities/entities/activity.entity";

export abstract class ActivityRepository {
    abstract create(user: string, date: string, startTime: number, endTime: number, status: string): Promise<void>;
    abstract remove(id: number): Promise<void>;
    abstract findByDate(date: any) : Promise<Activity[]>;
    abstract findAll(): Promise<Activity[]>;
}