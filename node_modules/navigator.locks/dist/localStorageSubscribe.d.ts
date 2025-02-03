export declare type EventType = Event & {
    value?: string;
    key?: string;
};
export declare function dispatchEvent(key: string, value: string): void;
export declare function setStorageItem(key: string, value: string): void;
export declare function getStorageItem(key: string): string | null;
export declare function removeStorageItem(key: string): void;
export declare function onStorageChange(key: string, listener: () => Promise<boolean> | boolean): void;
//# sourceMappingURL=localStorageSubscribe.d.ts.map