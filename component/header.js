function header(){

    var container = document.createElement('div')
           container.setAttribute('id','container')
           container.innerHTML=  `<div id="header">
           <div id="logo">
               <img src="https://d27028dliefpk3.cloudfront.net/static/brand/MasaiLogo.svg" width="100">
           </div>
           <div>
               <button onclick="india()">India</button>
           </div>
           <div>
              <button onclick="usa()">USA</button>
           </div>
           <div>
               <button onclick="nepal()">Nepal</button>
           </div>
           <div>
               <button onclick="china()">China</button>
           </div>
           <div>
               <input type="search" id="search" placeholder="Enter any Keyword">
              
           </div>
           <div>
           <button onclick="result()">Search</button>
           </div>
       </div>`

       return container
    
}

export default header;