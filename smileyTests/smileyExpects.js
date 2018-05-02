// apply module pattern after basic logic for framework has been written

function expects(x) {
	return {
		toEqual: function(y) {
			if (x === y) {
				console.log("Passed!")
			}
			else {
				console.log("Failed")
			}
		}
	};
};

expects(5).toEqual(5)
expects(4).toEqual("moo")