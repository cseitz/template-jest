

export class Stack<T> {
    public top: number;
    public items: T[]
    constructor() {
        this.top = -1;
        this.items = [];
    }
}

