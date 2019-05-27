// IIFE (immediate invoded function expression)to avoid memory in Chrome
// default type of response is text, so it's necessary to convert it to json
// retrival data from gdax using XHR
(function(){

     let request = new XMLHttpRequest()
     let url = "https://api.pro.coinbase.com/products"
     request.responseType = "json"
     request.open('GET', url);
     request.onload = ()=>{
          let res = request.response
          for(item of res)
               console.log(item)
          
     }
     request.send()
})()


// retrival data from gdax using Fetch API
(function(){

     fetch("https://api.pro.coinbase.com/products").then((response)=>{
     return response.json()
}).then((res)=>{
     
     for(item of res)
          console.log(item)
     }
     )
})()





