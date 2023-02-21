

/** Stack Implementation
 * - intentionally avoids using an array
 */
export class Stack<T = any> {
    public top: number;
    public items: Record<number, T>;
    constructor() {
        this.top = -1;
        this.items = {};
    }

    push(item: T) {
        this.items[++this.top] = item;
    }

    pop() {
        const item = this.items[this.top];
        delete this.items[this.top--];
        return item;
    }

}

