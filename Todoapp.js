function Addtask() {
     //grabbing input form and ul
    let input = document.getElementById('input-form')
    let ul = document.getElementById('ul')
     // value
    let value = input.value
    //creating task li
    let li = document.createElement('li')
    //creating text node 
    let text =document.createTextNode(value)
     //creating delete button 
      var deletebtn =  document.createElement('button')
      var X = document.createTextNode('X')
      deletebtn.appendChild(X)
    //appending text to li and li to ul
    li.appendChild(text)
    li.appendChild(deletebtn)
    ul.appendChild(li)





}




