describe("Array", () => {
    it("should same with javascript", () => {
        const names: string[] = ["Fanny", "Budi", "Eko"]
        const values: number[] = [1, 2, 3]

        console.info(names)
        console.info(values)

    })

    it("should support readonly array", () => {
        const hobbies: ReadonlyArray<String> = ["Membaca", "Menulis"]
        console.log(hobbies[0])
        console.log(hobbies[1])

        // hobbies[0] = "Main Game"
    })

    it("should support tuple", () => {
        const person: readonly[string, string, number] = ["Fanny","Budy",1]
        console.info(person)

        console.info(person[0])
        console.info(person[1])
        console.info(person[2])

        // person[0] = "Buti"
    })

})