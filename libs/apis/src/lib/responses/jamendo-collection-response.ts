import { JamendoHeader } from "./jamendo-header";

export interface JamendoCollectionResponse<T> {
    headers: JamendoHeader;
    results: T[];
}
