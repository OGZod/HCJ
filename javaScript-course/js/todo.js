todoList = JSON.parse(localStorage.getItem('todoList'))||[{
  name: '',
  date: ''
}];


function displayTodo(){
  let todoListHTML ='';

todoList.forEach(function(todoObject,index){
  const name = todoObject.name;
  const date = todoObject.date;

  

  const html =
   `<div>
  ${name}</div> <div> ${date} </div>
  <button class= "delete-button" onclick = "todoList.splice(${index},1); displayTodo(); localStorage.removeItem('todoList');">Delete</button>`;

  if(todoObject.name === 'xxx'){
    return;
  }

  todoListHTML += html;

});
// for(let i = 1; i< todoList.length; i++){
//   const todoObject = todoList[i];
//   const name = todoObject.name;
//   const date = todoObject.date;

  
//   const html =
//    `<div>
//   ${name}</div> <div> ${date} </div>
//   <button class= "delete-button" onclick = "todoList.splice(${i},1); displayTodo(); localStorage.removeItem('todoList');">Delete</button>`;

//   todoListHTML += html;
// }
document.querySelector('.todo-list').innerHTML = todoListHTML;


}


function addTodo(){
  const todo_name_input_element = document.querySelector('.todo-name-input'); 

  const todo_date_input_element = document.querySelector('.date-input'); 

  const _name = todo_name_input_element.value;

  const _date = todo_date_input_element.value;

  todoList.push({name: _name, date: _date});
  localStorage.setItem('todoList',JSON.stringify(todoList));
  console.log(localStorage.getItem('todoList'));

  todo_date_input_element.value = '';

  todo_name_input_element.value = '';

  displayTodo();

}

function removeEggs(foodItem){
  _foodItem = foodItem.reverse();
  result = [];
  let count = 0;

  for(let i = 0; i< foodItem.length; i++){
    if(_foodItem[i] === 'eggs'||foodItem[i] === 'egg'&& count<2){
      count++;
    continue;
  }
    else{
      result.push(foodItem[i]);
    }
    
  }
  return result.reverse();
}
console.log(removeEggs(['egg','eggs','bread','beans','egg','cake',]))

function fizzBuzz(){
  for(let i = 1; i < 21; i++){
    if(i%5 === 0 && i%3===0){
      console.log('fizzBuzz');}
    else if(i%3 === 0){
      console.log('fizz')
    }else if(i%5 === 0){
      console.log('buzz');
    }
    
    else{console.log(i);}
  }
}
fizzBuzz();