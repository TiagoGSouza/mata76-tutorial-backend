export abstract class ActivityRepository {
    abstract create(user: string, date: string, startTime: number, endTime: number, status: string): Promise<void>;
    abstract update(id: number, date: string, startTime: number, endTime: number): Promise<void>;
}