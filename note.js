console.log("note.js loaded");

  function Note(string) {
    
    this.string = string

    if(string.length <= 20) {
      this.isLengthy = false;
    }
    else{
      this.isLengthy = true
    }

  };
