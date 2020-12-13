
let users=[];
fetch('https://jsonplaceholder.typicode.com/users')
.then ((response)=>response.json())
.then ((response)=>{ users= response;
            console.log(users)
        showUsers(); })


.catch ((response)=>{console.log(response)})

function showUsers() {
     
    let parent = document.getElementById('user')
    users.map((item)=> {
        let div1 = document.createElement('div1')
        let div2 = document.createElement('div2')
        let div3 = document.createElement('div3')
        let company = document.createTextNode(`--Company name--: ${item.company.name}`)
        let name = document.createTextNode(`***UserName***: ${item.name}`)
        let phone = document.createTextNode(`<<Phone No>>: ${item.phone} `)
        div1.appendChild(company)
        div2.appendChild(name)
        div3.appendChild(phone)
        parent.appendChild(div1)
       parent.appendChild(div2)
       parent.appendChild(div3 )

        
      })
    


}
