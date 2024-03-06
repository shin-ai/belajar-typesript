import { sayHello } from "../src/say-hello"

describe('sayHello', () => {
    it(`shpuld returm hello fanny`, () => {
        expect(sayHello('fanny')).toBe('Hello fanny')
    })
})