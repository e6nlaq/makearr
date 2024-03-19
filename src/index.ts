export function makearr<T>(length: number, fill?: T): T[] {
    const ans = new Array<T>(length);
    if (fill !== undefined) {
        return ans.fill(fill);
    } else {
        return ans;
    }
}

export function makearr2<T>(h: number, w: number, fill?: T): T[][] {
    if (fill !== undefined) {
        return makearr<T[]>(h, makearr<T>(w, fill));
    } else {
        return makearr<T[]>(h, makearr<T>(w));
    }
}
