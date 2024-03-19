import { makearr } from '@/index';

describe('test', () => {
    test.concurrent('defualt', () => {
        const tmp = makearr<number>(100);
        for (let i = 0; i < tmp.length; ++i) {
            expect(tmp[i]).toBeUndefined();
        }
    });

    test.concurrent('init', () => {
        const tmp = makearr<number>(100, 0);
        for (let i = 0; i < tmp.length; ++i) {
            expect(tmp[i]).toBe(0);
        }
    });
});
