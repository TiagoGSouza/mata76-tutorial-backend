export abstract class ActivityRepository {
    abstract create(user: string, date: string, startTime: number, endTime: number, status: string): Promise<void>;
}