// We should put all of this inside an IFFE?
// Will that make it easier to export to a parent class with array & a count function included?

function SmileTest(){
	this.passedCount = 0
	this.failedCount = 0
}

SmileTest.prototype.isEqualTo = function(expect, actual){
	this.result = (expect === actual);
	if (this.result) {
		this.passedCount ++;
		console.log('Test passed.');
	}
	else {
		this.failedCount ++;
		console.log('Test failed.')
	}
};

test = new SmileTest();
test2 = new SmileTest();

test.isEqualTo(5,5);
test2.isEqualTo(4,5);

console.log(test.passedCount);
console.log(test2.failedCount);