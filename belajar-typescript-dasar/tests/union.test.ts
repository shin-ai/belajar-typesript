describe("union type", function () {
    it("should support in typerscript", function () {
        let sample: number | string | boolean = "Fanny";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);
    });

    it("should support typeof operator", function () {
        function process(value: number | String | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Fanny")).toBe("FANNY");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);

    });
});
