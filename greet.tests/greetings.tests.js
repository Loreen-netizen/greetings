describe("greetingsFactoryFunction", function () {

    it("should greet Yeukai", function () {

        var greetFactoryFunction = greetingsFactoryFunction();

        assert.equal("Hello Yeukai", greetFactoryFunction.greet("Yeukai"))
    });

    it("should return 1 when one person is greeted", function () {

        var greetFactoryFunction2 = greetingsFactoryFunction();
        var peopleGreeted = greetFactoryFunction2.verifyNames("Loreen")
        assert.equal(1, greetFactoryFunction2.numberOfPeopleGreeted(peopleGreeted))
    });

    it("should greet people in 3 different languages", function () {

        var greetFactoryFunction4 = greetingsFactoryFunction();

        assert.equal("Hesi Kani ", greetFactoryFunction4.greetLanguage("Shona"));
        assert.equal("Hello ", greetFactoryFunction4.greetLanguage("English"));
        assert.equal("Sawubona ", greetFactoryFunction4.greetLanguage("Ndebele"))
    });

    it("should keep names in local storage", function () {

        var greetFactoryFunction12 = greetingsFactoryFunction();
        assert.equal("[]", greetFactoryFunction12.storeNames("[]"))
    });

    it("should not count the same person twice", function () {

        var greetFactoryFunction5 = greetingsFactoryFunction();
        greetFactoryFunction5.greet("Loreen");
        assert.equal("you have already been counted", greetFactoryFunction5.verifyFunction((["Yeu" , "Pru", "Rose"])))
    });


    it("should clear input text when greet button is clicked", function(){
        var greetFactoryFunction7 = greetingsFactoryFunction();
        assert.equal("", greetFactoryFunction7.clearGreetInput("Yeukai"))
        

    });

    it("should be able to get names from local storage", function(){
        var greetFactoryFunction8 = greetingsFactoryFunction();
        assert.deepEqual([], greetFactoryFunction8.getNames())
        

    });

    it("should return error message when language isnt selected", function(){
        var greetFactoryFunction9 = greetingsFactoryFunction();
        
        assert.equal("Please select language", greetFactoryFunction9.errorMessageLanguage(""))
        

    });
    

    it("should return error message when user name has not been entered", function(){
        var greetFactoryFunction10 = greetingsFactoryFunction();
        
        assert.equal("Please enter userName", greetFactoryFunction10.errorMessageUserName(""))
        

    });
    

});