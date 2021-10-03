//http://www.codewars.com/kata/the-most-sacred-of-days/train/javascript
// https://kalender-365.de/leap-years.php
// https://www.timeanddate.com/holidays/us/thanksgiving-day

function blackFriday(year) {
	let date = 0;
	let leapDate = 26;
	for (let i = 1752; i < year; i++) {
		if (i % 4 === 0) {
			leapDate += 2;
			if (date > 28) {
				date = 22;
			}
			if (date <= 22) {
				date = 28;
			}
			if (i % 100 === 0) {
				date -= 2;
			}
			if (i % 400 === 0) {
				date += 2
			}
		}
		else {
			date -= 1;
		}
	}
	return date + 1;
}

Array with range
First year: 1752 => 23
	% 7 to keep within array
leapYear variable = year / 4;
var skipped = span / 100;
var added = span / 400;

function blackFriday(year) {
	let date = 23;
	let span = year - 1752;
	let curIndex = 0;

	const thanksDate = [23, 24, 25, 26, 27, 28, 29];
	let offset = year % 4;
	let leapYear = (year - offset) / 4;
	console.log(leapYear);
	let trueIndex = curIndex % 7;
	index = leapYear % 7;
	return thanksDate[index];
}