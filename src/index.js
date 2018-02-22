module.exports = function getZerosCount(number) {
	var floor = Math.floor(number / 5);
	var numZeroes = 0;
	while(floor !== 0){
		numZeroes += floor;
		floor = Math.floor(floor / 5);
	}
  return numZeroes;
}
