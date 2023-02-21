import { Stack } from '~/stack';


describe('My Stack', () => {

    let stack: Stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});

    });

    it('can push to the top', () => {

        stack.push('hello');
        expect(stack.top).toBe(0);
        expect(stack.pop()).toEqual('hello');

    });

    it('can pop off', () => {

        stack.push('alpha');
        stack.push('beta');

        expect(stack.pop()).toEqual('beta');
        expect(stack.pop()).toEqual('alpha');
        expect(stack.top).toBe(-1);

    });

})

