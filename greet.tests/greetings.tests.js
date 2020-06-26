describe("greetingsFactoryFunction", function () {

    it("should greet Yeukai", function () {

        var greetFactoryFunction = greetingsFactoryFunction();

        assert.equal("Hello Yeukai", greetFactoryFunction.greet("Yeukai"))
    });

    it("should return 1 when one person is greeted", function () {

        var greetFactoryFunction2 = greetingsFactoryFunction();
        greetFactoryFunction2.greet("Loreen");
        assert.equal(1, greetFactoryFunction2.numberOfPeopleGreeted())
    });


    it("should return 3 when 3 people are greeted", function () {

        var greetFactoryFunction3 = greetingsFactoryFunction();
        greetFactoryFunction3.greet("Hlosani");
        greetFactoryFunction3.greet("Prudence");
        greetFactoryFunction3.greet("Joseph");
        assert.equal(1, greetFactoryFunction3.numberOfPeopleGreeted())
    });

    it("should greet people in 3 different languages", function () {

        var greetFactoryFunction4 = greetingsFactoryFunction();

        assert.equal("Hesi Kani ", greetFactoryFunction4.greetLanguage("Shona"));
        assert.equal("Hello ", greetFactoryFunction4.greetLanguage("English"));
        assert.equal("Sawubona ", greetFactoryFunction4.greetLanguage("Ndebele"))
    });

    it("should not count the same person twice", function () {

        var greetFactoryFunction5 = greetingsFactoryFunction();
        greetFactoryFunction5.greet("Loreen");
        assert.equal("you have already been counted", greetFactoryFunction5.verifyFunction((["Yeu" , "Pru", "Rose"])))
    });

    it("should PUSH greeted name into an array", function () {

        var greetFactoryFunction6 = greetingsFactoryFunction();
        greetFactoryFunction6.greet("Hlosani");
        assert.deepEqual(["Hlosani"], greetFactoryFunction6.theNamesArray())
    });

});