import {Response} from "./response";
import {Record} from "../models/record";

export class ResponseRecord implements Response {
    success: boolean;
    errors: object;
    data: Record[];
    records: object[];
}
