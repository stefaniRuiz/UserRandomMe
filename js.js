/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



fetch('https://randomuser.me/api/')// faz o pedido assícrono
  .then( res => res.json())
  .then( user => { 
    u = user.results[0]
    fakeName.innerText = `
    Name: ${u.name.first } ${u.name.last}
    City: ${u.location.city}
    State: ${u.location.state}
    Age: ${u.dob.age}
    From: ${u.nat}
    `

    imgUser.src = u.picture.large
   
        
       
    
  }
)
