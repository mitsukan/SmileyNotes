console.log("noteBook.js loaded");

function NoteBook(){
  this.storage = [];
};
//
NoteBook.prototype.store = function(note){
  if(typeof(note.string) == "string") {
    this.storage.push(note);
  }
};
