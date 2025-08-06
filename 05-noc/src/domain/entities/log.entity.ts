export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export class LogEntity {

    public level: LogSeverityLevel;
    public message: string;
    public url: string;
    public createdAt: Date;

    constructor(message: string, level: LogSeverityLevel, url: string) {
        this.level = level;
        this.message = message;
        this.url = url;
        this.createdAt = new Date();
    }

    static fromJson(json: string): LogEntity {
        const { message, level, createdAt, url } = JSON.parse(json);
        const log = new LogEntity(message, level, url);
        log.createdAt = new Date(createdAt);
        return log;
    }

}