import { throttle } from "./throttle";

import * as _ from 'lodash';

jest.useFakeTimers();

describe('debounce', () => {

    let func: jest.Mock;
    let debouncedFunc: Function;

    beforeEach(() => {
        func = jest.fn();
        debouncedFunc = _.debounce(func, 1000);
    });

    test('execute just once', () => {
        for (let i = 0; i < 100; i++) {
            debouncedFunc();
        }

        // Fast-forward time
        jest.runAllTimers();

        expect(func).toHaveBeenCalledTimes(1);
    });
});