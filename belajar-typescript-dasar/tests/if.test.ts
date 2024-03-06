describe("if statement", function() {
    it("shloud support in typescript", function() {

        const examValue = 90;

        if(examValue > 80) {
            console.info("Good")
        } else if (examValue > 60) {
            console.info("Not Bad")
        } else {
            console.info("Try Again")
        }

    })

    it("shloud support terbaty operator", function() {

        const value = 80;

        const say = value >= 75 ? "Congratulation" : "Try Again"
        console.info(say)

    })

    it("shloud support switch statement", function() {

        function sayHello(name: string): string {
            switch(name) {
                case "Fanny":
                    return "Hi Fanny";
                case "Cindy":
                    return "Hi Cindy";
                default:
                    return "Hello"
            }
        }

        console.info(sayHello("Fanny"))
        console.info(sayHello("Cindy"))
        console.info(sayHello("Joko"))

    })

})