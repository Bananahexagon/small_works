class Trio {
    r: number;
    i: number;
    j: number;
    constructor(r: number, i: number, j: number) {
        this.r = r;
        this.i = i;
        this.j = j;
    }
    add(t: Trio) {
        return new Trio(
            this.r + t.r,
            this.i + t.i,
            this.j + t.j
        );
    }
    sadd(t: Trio) {
        this.r = this.r + t.r;
        this.i = this.i + t.i;
        this.j = this.j + t.j;
    }
    mul(t: Trio) {
        const [a, b, c] = [this.r, this.i, this.j];
        const [d, e, f] = [t.r, t.i, t.j];
        return new Trio(
            a * d - b * e + c * f,
            a * e + b * d,
            a * f + c * d
        );
    }
    smul(t: Trio) {
        const [a, b, c] = [this.r, this.i, this.j];
        const [d, e, f] = [t.r, t.i, t.j];
        this.r = a * d - b * e + c * f;
        this.i = a * e + b * d;
        this.j = a * f + c * d;
    }
    fmt() {
        const [a, b, c] = [this.r, this.i, this.j];
        return `${a} + ${b}i + ${c}j`;
    }
}
const o = new Trio(1, 0, 0);
const i = new Trio(0, 1, 0);
const j = new Trio(0, 0, 1);