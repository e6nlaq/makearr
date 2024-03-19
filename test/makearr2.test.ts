import { makearr2 } from '@/index';

describe('makearr2', () => {
    test.concurrent('default', () => {
        const arr = makearr2<number>(10, 10);
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                expect(arr[i][j]).toBeUndefined();
            }
        }
    });
});
