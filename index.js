// Use the code outline below for your answer

var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}), counter = 0, staffRoster = [],

Employee = function(staffMember) {
   this.firstname = staffMember.firstname
   this.familyname = staffMember.familyname
   this.age = staffMember.age

   this.setName = function(newName) { this.firstname = newName }
   this.setFullName = function() { return this.name + ' ' +  this.familyname }
};


readline.on('line', function(line) {
  counter+=1;
  staffRoster[counter] = function() {
    var staff = new Employee({ firstname : line.trim() });
    console.log("Staff #" + counter + ': ' + staff.firstname + ' ' + staff.familyname + ',' + staff.age);
  };
}).on('close', function() {
  staffRoster.forEach(function(element){
    element();
  });
  console.log('Have a great day!');
  process.exit(0);
});