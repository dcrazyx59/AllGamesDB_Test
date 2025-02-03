declare const LOCK_MODE: {
    readonly EXCLUSIVE: "exclusive";
    readonly SHARED: "shared";
};
declare type LockMode = typeof LOCK_MODE[keyof typeof LOCK_MODE];
interface LockOptions {
    mode: LockMode;
    ifAvailable: Boolean;
    steal: Boolean;
    signal?: AbortSignal;
}
export declare type Lock = {
    mode: LockMode;
    name: string;
};
declare type LockGrantedCallback = (lock?: Lock | null) => Promise<any> | any;
export declare type LockInfo = Lock & {
    clientId: string;
    uuid: string;
};
declare type RequestArgsCase1 = [name: string, callback: LockGrantedCallback];
declare type RequestArgsCase2 = [
    name: string,
    options: Partial<LockOptions>,
    callback: LockGrantedCallback
];
export declare type LocksInfo = LockInfo[];
export interface LockManagerSnapshot {
    held: LocksInfo;
    pending: LocksInfo;
}
export declare function generateRandomId(): string;
export declare class LockManager {
    private _defaultOptions;
    private _clientId;
    constructor();
    private _init;
    private _getClientIds;
    private _storeClientIds;
    private _storeThisClientId;
    request(...args: RequestArgsCase1): Promise<any>;
    request(...args: RequestArgsCase2): Promise<any>;
    query(): Promise<LockManagerSnapshot>;
    private _pushToLockRequestQueueMap;
    private _pushToHeldLockSet;
    private _requestLockQueueMap;
    private _heldLockSet;
    private _updateHeldAndRequestLocks;
    private _handleSignalExisted;
    private _handleExceptionWhenStealIsTrue;
    private _handleRequestArgs;
    private _handleHeldLockAndRequest;
    private _signalOnabort;
    private _resolveWithCB;
    private _handleNewHeldLock;
    private _handleHeldLockBeSteal;
    private _storeHeldLockSet;
    private _storeRequestLockQueueMap;
    private _isInHeldLockSet;
    private _handleNewLockRequest;
    private _handleSharedLockFromListener;
    private _storeHeldLockSetAndRequestLockQueueMap;
    private _query;
    private _onUnload;
    private _cleanClientLocksByClientId;
    private _cleanHeldLockSetByClientId;
    private _cleanRequestLockQueueByClientId;
    private _cleanUnliveClientLocks;
}
export {};
//# sourceMappingURL=polyfill.d.ts.map