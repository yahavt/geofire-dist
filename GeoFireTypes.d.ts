import * as DatabaseTypes from '@firebase/database-types';
export declare namespace GeoFireTypes {
    interface Document {
        '.priority': string;
        g: string;
        l: number[];
    }
    type KeyCallback = (key?: string, location?: number[], distanceFromCenter?: number) => void;
    interface LocationTracked {
        location: number[];
        distanceFromCenter: number;
        isInQuery: boolean;
        geohash: string;
    }
    type ReadyCallback = () => void;
    interface QueryCallbacks {
        ready: ReadyCallback[];
        key_entered: KeyCallback[];
        key_exited: KeyCallback[];
        key_moved: KeyCallback[];
    }
    interface QueryCriteria {
        center?: number[];
        radius?: number;
    }
    type QueryStateCallback = (a: firebase.DataSnapshot | null, b?: string) => any;
    interface QueryState {
        active: boolean;
        childAddedCallback: QueryStateCallback;
        childRemovedCallback: QueryStateCallback;
        childChangedCallback: QueryStateCallback;
        valueCallback: QueryStateCallback;
    }
    namespace firebase {
        type DataSnapshot = DatabaseTypes.DataSnapshot;
        type Reference = DatabaseTypes.Reference;
        type Query = DatabaseTypes.Query;
    }
}
