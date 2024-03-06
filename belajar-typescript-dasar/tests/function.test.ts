describe("Function", function() {
    it("should support in typerscript", function() {

        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello("Fanny")).toBe("Hello Fanny")

        function printHello(name: string): void {
            console.info(`Hello ${name}`)
        }

        printHello("Fanny")

    })

    it("should support default value", function() {

        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`
        }

        expect(sayHello("Fanny")).toBe("Hello Fanny")
        expect(sayHello()).toBe("Hello Guest")

    })

    it("should support rest parameter", function() {

        function sum(...values: number[]): number {
            let total = 0
            for(const value of values) {
                total += value
            }

            return total
        }

        expect(sum(1,2,3,4,5)).toBe(15)

    })

    it("should support opsional parameter", function() {

        function sayHello(firstName: string, lastName?: string): string {
            if(lastName) {
                return `Hello ${firstName} ${lastName}`
            } else {
                return `Hello ${firstName}`
            }
        }

        expect(sayHello("Fanny")).toBe("Hello Fanny")
        expect(sayHello("Fanny", "Muhammad")).toBe("Hello Fanny Muhammad")

    })

    it("should support function overloading", function() {

        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any) {
            if (typeof value === "string") {
                return value.toUpperCase()
            } else if (typeof value === "number") {
                return value*10
            }
        }

        expect(callMe("Fanny")).toBe("FANNY")
        expect(callMe(10)).toBe(100)

    })

    it("should support function as parameter", function() {

        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Fanny", toUpper)).toBe("Hello FANNY")
        
        expect(sayHello("Fanny", function(name: string): string {
            return name.toUpperCase()
        })).toBe("Hello FANNY")

        expect(sayHello("Fanny", (name: string): string => name.toUpperCase())).toBe("Hello FANNY")

    })

})