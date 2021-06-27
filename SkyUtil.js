"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkyUtil {
    static pull(array, ...removeList) {
        for (const el of removeList) {
            const index = array.indexOf(el);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    }
    static insert(array, index, item) {
        array.splice(index, 0, item);
    }
    static random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static repeat(times, func) {
        const promises = [];
        for (let i = 0; i < times; i += 1) {
            const result = func(i);
            if (result instanceof Promise) {
                promises.push(result);
            }
        }
        if (promises.length > 0) {
            return Promise.all(promises);
        }
    }
}
exports.default = SkyUtil;
//# sourceMappingURL=SkyUtil.js.map