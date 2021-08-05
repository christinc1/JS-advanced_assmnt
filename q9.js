const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }, };

gimli.greet();
/* op
"Hi, my name is Gimli!"
*/