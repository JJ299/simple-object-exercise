const person = {
	name: 'Bill',
	city: 'Newark',
	age: 24 ,
	skills: ['coding', 'presentation', 'video editing']
};

const message = `Hello my name is ${person.name} and I currently live at the city of ${person.city}. I am currently ${person.age} years old and have extensive knowledge in ${person.skills.join(', ')}.`;

console.log(message);