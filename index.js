var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}), counter = 0, staffRoster = [],

Employee = function(staffMember) {
   this.firstname = staffMember.firstname
   this.familyname = staffMember.familyname
   this.age = staffMember.age

   this.getFullName = function() {
     var fullName = [];
     if (!!this.firstname) {
       fullName.push(this.firstname);
     }
     if (!!this.familyname) {
       fullName.push(this.familyname);
     }
     return fullName.join(' ');
   }
};


readline.on('line', function(line) {
  counter++;
  var rx = /^([a-zA-Z]*)[, ]+([a-zA-Z]*),(\d+)$/g;
  staffRoster[counter] = function(index) {
    var data = rx.exec(line.trim());
    if (data) {
      var staff = new Employee({ firstname : data[1], familyname: data[2], age: data[3] });
      console.log('#' + index + ',' + staff.getFullName() + ',' + staff.age);
    } else {
      console.log('#' + index + ',---Error---');
    }
  };
}).on('close', function() {
  staffRoster.forEach(function(element, index){
    element(index);
  });
  console.log('Have a great day!');
  process.exit(0);
});
