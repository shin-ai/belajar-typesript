describe("Any", function() {
    it("should support in typerscript", function() {
        const person: any = {
            id: 1,
            name: "Muhammad Rifanny",
            age: 24
        }

        person.age = 225

        console.info(person)
    })
})