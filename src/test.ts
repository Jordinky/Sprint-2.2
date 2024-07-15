import { throttle } from "./throttle";

jest.useFakeTimers();

describe('throttle', () => {
    it('should call the function immediately', () => {
        const func = jest.fn();
        const throttledFunc = throttle(func, 1000);

        throttledFunc();

        expect(func).toHaveBeenCalledTimes(1);
    });

    it('should throttle function calls', () => {
        const func = jest.fn();
        const throttledFunc = throttle(func, 1000);

        throttledFunc();
        throttledFunc();
        throttledFunc();

        expect(func).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(1000);

        expect(func).toHaveBeenCalledTimes(2);
    });
});
