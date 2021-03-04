const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerald Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const dem = presidents.filter(function (president) {
  if (president.party === "D") {
    return true;
  }
});
console.table(dem);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const rep1 = presidents.filter(function (president) {
  if (president.party === "R" && president.terms < 2) {
    return true;
  }
});
console.table(rep1);

//3) return only the last three presidents
const last3 = [...presidents.slice(0, 3)];
console.log(last3);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const term1 = dem.filter(function (president) {
  if (president.terms === 2) {
    return true;
  }
});
console.log(term1);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
