import { Employee, Manager } from "../src/employee"
import { Seller } from "../src/seller"
import { Person } from "../src/person"

describe("interface", function() {
    it("should support in typescript", function() {

        const seller: Seller = {
            id: 1,
            name: "Toko ABC",
            nib: "123321123",
            npwp: "231231231"
        }

        seller.name = "Toko Fanny"

        console.info(seller)

    })

    it("should support function interface", function() {

        interface AddFunction {
            (value1: number, value2: number) : number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(1,2)).toBe(3)

    })

    it("should support indexable interface", function() {

        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Muhammad", "Rifanny","Shiro"]
        console.info(names)

    })

    it("should support indexable interface for non number index", function() {

        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            "name": "fanny",
            "address": "jakarta"
        }

        expect(dictionary["name"]).toBe("fanny")
        expect(dictionary["address"]).toBe("jakarta")

    })

    it("should support extends interface", function() {

        const employee: Employee = {
            id: "1",
            name: "Fanny",
            division: "IT"
        }

        console.info(employee)

        const manager: Manager = {
            id: "2",
            name: "Gita",
            division: "IT",
            numberOfEmployees: 10
        }

        console.info(manager)

    })

    it("should support function in interface", function() {

        const person: Person = {
            name: "Fanny",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`
            }
        }

        console.info(person.sayHello("Budi"))

    })

    it("should support intersection type", function() {

        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasId & HasName

        const domain: Domain = {
            id: "1",
            name: "Fanny"
        }

        console.info(domain)

    })

    it("should support type assertions", function() {

        const person: any = {
            name: "Fanny",
            age: 25
        }

        const person2: Person = person as Person
        // person2.sayHello("Budi")

        console.info(person2)

    })

})