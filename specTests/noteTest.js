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

    describe("Knows if the content is 20 characters or less", function() {

      it("False if short", function() {
        var testNote = new Note("Hello!");
        expects(testNote.isLengthy).toEqual(false);
      });

      it("True if long", function() {
        var testNote = new Note("This is definitely longer than the 20 character limit that we are trying to test");
        expects(testNote.isLengthy).toEqual(true);
      });

    });

  });








// describe: length test
// it: checks the string length whether it is 20 char or less.

// describe: HTML - To come later
