import callback from './../src/modules/Base';

describe('lite-lodash', () => {
    describe('isPromise', () => {
        it('should Promise.resolve be a promise', () => {
            const input = (e) => { console.log(e) }
            const actual = callback(input);
            const expected = true;

            expect(actual).toEqual(expected);
        });
    });
});
