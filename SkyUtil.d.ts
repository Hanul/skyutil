export default class SkyUtil {
    static pull(array: any[], ...removeList: any[]): void;
    static insert(array: any[], index: number, item: any): void;
    static random(min: number, max: number): number;
    static repeat(times: number, func: (index: number) => Promise<void> | void): Promise<void[]> | undefined;
}
//# sourceMappingURL=SkyUtil.d.ts.map