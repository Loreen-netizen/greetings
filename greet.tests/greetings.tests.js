describe("greetingsFactoryFunction", function(){

    it ("should greet Yeukai", function(){

    var greetFactoryFunction = greetingsFactoryFunction();
   
    assert.equal("Hello Yeukai", greetFactoryFunction.greet("Yeukai"))
    });
    
    it ("should return 1 when one person is greeted", function(){

        var greetFactoryFunction2 = greetingsFactoryFunction();
        greetFactoryFunction2.greet("Loreen");
        assert.equal(1, greetFactoryFunction2.numberOfPeopleGreeted())
        });


     it ("should return 3 when 3 people are greeted", function(){

            var greetFactoryFunction3 = greetingsFactoryFunction();
            greetFactoryFunction3.greet("Hlosani");
            greetFactoryFunction3.greet("Prudence");
            greetFactoryFunction3.greet("Joseph");
            assert.equal(1, greetFactoryFunction3.numberOfPeopleGreeted())
            });

    



});