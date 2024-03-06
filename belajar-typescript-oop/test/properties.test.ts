describe("Properties", () => {

    class Customer {
        readonly id: number;
        name: string = "Guest";
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    it("should can have properties", () => {

        const customer = new Customer(1, "Cindy")
        customer.age = 25;

        console.info(customer.id)
        console.info(customer.name)
        console.info(customer.age)
        console.info(customer)

    })

    it("should can have methode", () => {

        const customer = new Customer(1, "Fanny")
        customer.sayHello("Budi")

    })

})