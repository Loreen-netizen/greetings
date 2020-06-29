describe("greetingsFactoryFunction", function () {

    it("should greet Yeukai", function () {

        var greetFactoryFunction = greetingsFactoryFunction();

        assert.equal("Hesi Kani Yeukai", greetFactoryFunction.greetBtnClicked("Yeukai", "Shona"))
    });

    it("should return 1 when one person is greeted", function () {

        var greetFactoryFunction2 = greetingsFactoryFunction();
        assert.equal("total people greeted = 1", greetFactoryFunction2.namesCounter(["yeu"]))
    });


    it("should return 3 when 3 people are greeted", function () {

        var greetFactoryFunction3 = greetingsFactoryFunction();
        assert.equal("total people greeted = 3", greetFactoryFunction3.namesCounter(["Hlosani", "Prudence", "Joseph"]))
    });

    it("should greet people in 3 different languages", function () {

        var greetFactoryFunction4 = greetingsFactoryFunction();

        assert.equal("Hesi Kani ", greetFactoryFunction4.greetLanguage("Shona"));
        assert.equal("Hello ", greetFactoryFunction4.greetLanguage("English"));
        assert.equal("Sawubona ", greetFactoryFunction4.greetLanguage("Ndebele"))
    });

    it("should not count the same person twice", function () {

        var greetFactoryFunction5 = greetingsFactoryFunction();
        greetFactoryFunction5.greetBtnClicked("Loreen");
        assert.equal("you have already been counted", greetFactoryFunction5.verifyFunction((["Yeu" , "Pru", "Rose"])))
    });

    it("should PUSH greeted name into an array", function () {

        var greetFactoryFunction6 = greetingsFactoryFunction();
        assert.deepEqual(["Hlosani"], greetFactoryFunction6.storeNames("Hlosani"))
    });

    // it("should clear input text when greet button is clicked", function(){
    //     var greetFactoryFunction7 = greetingsFactoryFunction();
    //     assert.equal("", greetFactoryFunction7.clearGreetInput("Yeukai"))
        

    // });

});