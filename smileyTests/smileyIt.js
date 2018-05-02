function it(string, callback) {
	console.log(callback());
}



//What we kinda want the syntax to look like:
// it("does this thing", function(){
// 	expect().toEqual();
// });