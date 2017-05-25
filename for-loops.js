for(var i=5; i<=120; i=i+10)
{
	console.log(`Counter variable is ${i}`);
}


for(var counter=4096; counter>=1; counter=counter/2)
{
	console.log(`Counter variable is ${counter}`);
}


var presidents= ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe"];
var count=1;
for (var c = 0; c<presidents.length; c++ )
{   
	console.log(`President ${count} is ${presidents[c]}`);
	count= count +1;
}


var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (key in antSpecies)
{console.log (`${key}`);}

