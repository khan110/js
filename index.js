//1
/*var display = { name:'Umair ALi Khan', class: 'LWF 1'}

alert(display.name)
alert(display.class)*/


//var birthyear = {year:1995}

//alert(`type of birht year is number ${birthyear.year}`)


const age = (a) => {
   return a*365
};

 
//console.log(age(22))


const number = (n) => { 
   return n + 1
}


//console.log(number(2));

const dec = (n) => { 
   return n - 1
}


//console.log(dec(2));


const square = (n) => {
   return n ** 2
}

//console.log(square(4))




var karachi = 'Welcome to city of lights';
var lahore = 'Welcome to historical city';
var quetta = 'welcome to coldest city'


const UserSal = (salary) => {
if (salary<60000) 
{return 'You are a junior dev'} 
else if (salary<=60000) {return'You are a senior dev'} 
else if  (salary>=100000) {return'You are a software eng'}

  
} 



const city = (n) => {
   var karachi = 'Welcome to city of lights';
   var lahore = 'Welcome to historical city';
   var quetta = 'welcome to coldest city'
   let result ; if (n===karachi){return karachi}
   else if (n===lahore) {return lahore}
   else if (n===quetta) {return quetta}

   return result

}

const calculator = (a,b,c) =>{
   var number1 = a
   var number2 = b
   var operator = c
   var result ; if (operator==='+'){return number1 + number2}
   else if (operator==='-') {return number1 - number2} 
   else if (operator==='*') {return number1 * number2}
   else if (operator==='/') {return number1 / number2}

   return result

}

//console.log(calculator(2,3,'+'))
//console.log(city(lahore))
//console.log(UserSal(100000))

const P = () => {
   var para = "the quick brown fox jumps over the lazy dog"
   var result = para.replace('the quick brown fox', "the white cat")
    return result
}


const entry = (x) => {

   var spaces ='  ';
   var result ; if (x===spaces){return "two spaces found"} else if (x==!spaces) { return "you are good to go"};
    return result

} 


const input = (a) => {

  var b = [''];
  var result ; if (b===a) { return true } else if (b==!a)  {return false}
  return result 

}

//console.log(input())

//var courses = [];
//////for (i=0; i < 5 ; i++){
//courses.push(prompt("course name"))};

//console.log(courses);


//let m =  now.getMonth() ;
//let d = now.getDate() ;
//let y = now.getFullYear();
 //var now = new date();

 //console.log(now)

///class 4 assignment

const arr = [22,44,55,66];
const [LA, NewYork, Karachi, Islamabad] = [...arr]

 
console.log(NewYork)

///////////////////

function Students(name, age, rollNo) {
   this.name = name;
   this.age = age;
   this.rollNo = rollNo 
}

let student1 = new Students('Marry', 20, 2)
 
 console.log(student1)

///////////////////////

 let arr1 = [1,2,3,4,5]
 function a (...arr1){
     return `returning array from function ${arr1}`
 }
 
 console.log(a(arr1))
////////////////////


 const sum = (a,b,c,d,e) =>{ return a+b+c+d+e}

 const res = sum(...arr1)

 console.log(res)



////////////////////////////////


function addtask () {
 let input = document.getElementById('task');
 let ul = document.getElementById('ul')
 let value = input.value
 let li = document.createElement('li')
 let text = document.createTextNode(value)
 li.appendChild(text)
 ul.appendChild(li)


}



//////

let books = [{id:0, name:"Harry potter", author:"abc", publicationDate:"May 2019",genre:"fiction"},
            {id:1, name:"Lion king", author:"xyz", publicationDate:"Aug 2019",genre:"adventure"},
            {id:2, name:"Lord of rings", author:"zzz", publicationDate:"June 2019",genre:"action"}
            ]



        var  result = books.map((item)=>(item.author))            
   console.log(result)


let book = {
    name:"Harry potter",
     author:"abc",
      publicationDate:"May 2019",
      genre:"fiction"}

let { name, author, publicationDate, genre} = book

console.log(book)

      for (let item in book){
         // console.log(book[item])
      }
//make an array of even numbers and double each number and save it in new array. Copy the values of arr2 in arr1 with the help of spread op.

      let even = [2,4,6,8,10]
      let newArr = even.map((item)=> item*2)
   /////
   let arr2=[4,5,6]
   let arr11=[1,2,3,...arr2]
   
   
   console.log(arr11)

   ////let arr = [1,2,3,4,5,6] Make new array with name newArr. and copy the values of arr in newArr with the help of spread op



   let arr3 = [1,2,3,4,5,6]
   let newArr11 = [...arr3]
 /////let obj = {name: 'Civic', model:2020, color:'grey'} Show each property of an object. Hint: First extract variables from an object the help of destructuring then show these variables in console.log.
 

 let car = {name1:"Civic",
            model1:2020,
            color1:"grey"  }

            //destructuting 
            let {name1, model1, color1} = car
             console.log(car)
     // for in loop
          for (let item in car) {
             console.log(car[item]) 
          }
      