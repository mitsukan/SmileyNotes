
  describe("Notebook", function() {

    it("Has a noteBook constructor", function(){
      expects(typeof NoteBook).toEqual("function");
    });

    it("Has an array for storage", function() {
      var testNoteBook = new NoteBook();
      expects(testNoteBook.storage.length).toEqual(0);
    });


    it("Can store a Note", function() {
      var testNoteBook = new NoteBook();
      var testNote = new Note("Hello!");
      testNoteBook.store(testNote);
      expects(testNoteBook.storage.length).toEqual(1);
    });

    it("Refuses pushing into array if it's not a string", function() {
      var testNoteBook = new NoteBook();
      var testNote = new Note(123);
      testNoteBook.store(testNote);
      expects(testNoteBook.storage.length).toEqual(0);
    });

  });
