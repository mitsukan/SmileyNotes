// Creating instance variables within the `it` statements
// mean that they only exist within them.

  describe("Note", function() {

    it("Has a note constructor", function() {
      expects(typeof Note).toEqual("function");
    });

    it("Can store a string", function(){
      var testNote = new Note("Hello!");
      expects(testNote.string).toEqual("Hello!");
    });


  });








// describe: length test
// it: checks the string length whether it is 20 char or less.

// describe: HTML - To come later
