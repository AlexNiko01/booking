import {Record} from './record';

export class Lesson {
    id: number;
    date: string;
    period: string;
    created_at: string;
    updated_at: string;
    records: Array<Record>;
}