// describe: Note

//cannot be created without string passed

// it: has at least 1 character in note


  describe("Note", function() {

    it("Has a note constructor", function() {
      expects(typeof Note).toEqual("function");
    });

    it("Can store a string", function(){
      testNote1 = new Note("Hello!");
      expects(testNote1.string).toEqual("Hello!");
    });

  });

  describe("Notebook", function() {

    it("Has a noteBook constructor", function(){
      expects(typeof NoteBook).toEqual("function");
    });

    it("Has an array for storage", function() {
      testNoteBook1 = new NoteBook();
      expects(testNoteBook1.storage.length).toEqual(0);
    });



  });





// describe: new noteBook
// it: creates a new noteBook(array)

// describe: length test
// it: checks the string length whether it is 20 char or less.

// describe: HTML - To come later
