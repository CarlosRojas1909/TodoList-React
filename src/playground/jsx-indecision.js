console.log('App.js is running!');

const app = {
   title: 'Indecision App',
   subtitle: 'Put your life in the hands of a computer',
   options: []
};

// Submit form
const onFormSubmit = (event) => {
     event.preventDefault();

      let option = event.target.elements.option.value.trim();
       if (option) {
          app.options.push(option);
          event.target.elements.option.value = "";
      }     
   
      render()
}

// Remove function
const removeAll = () => {
   app.options = [];

render()
}

// Make decision function
const onMakeDecision = () => {
   let randomNum = Math.floor(Math.random() * app.options.length);
   let option = app.options[randomNum]
   console.log(option)
   

}

const render = () => {

         const template = (
            <div>
               <h1>{app.title}</h1>
               {app.subtitle && <p>{app.subtitle}</p>}
               <p>{app.options.length > 0 ? 'Here are yor options:' : 'No options'}</p>
               <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
               <button onClick={removeAll}>remove all</button>
               <ol>
                  {app.options.map((option) => <li key={option}>{option}</li> )}
               </ol>
               <form onSubmit={onFormSubmit}>
                     <input  type="text" name="option"/>
                     <button>Add Option</button>  
               </form>
            </div>
         )

      ReactDOM.render(template, document.getElementById('app'));

};

render();


//this is an Object constructor function
// function Person(first, last, age, eyecolor) {

//             this.firstName = first;
//             this.lastName = last;
//             this.age = age;
//             this.eyeColor = eyecolor;
            
// }
// Person.prototype.nationality = 'English';
// Person.prototype.name = function () {
//    return this.firstName + ' ' + this.lastName
// }

// var myFather = new Person('Juan', 'Rojas', 24, 'brown');


// console.log(myFather)


// var myMother = new Person('Sally', 'Rally', 40, 'green');

// console.log(myMother)

//Creating an Object
// let myCar = new Object();

// myCar.name = 'Ford';
// myCar.model = 'mustang';
// myCar.year = 1969;


// console.log(myCar)

//Using the same object but using a constructor function named Car
// function Car () {
//   this.name = 'Ford';
//   this.model = 'mustang';
//   this.year = 1969

// }

// let myCar = new Car( );


// console.log(myCar)

