// import header from  './component/header.js'
 
// console.log(header)

async function india(){

    let req = await fetch(`https://newsapi.org/v2/top-headlines?q=India&apiKey=21539c465b344398940491f499abdc88`)
    let data = await req.json()
    data = data.articles
    console.log(data)
   
}

// https://newsapi.org/v2/top-headlines?q=tesla&apiKey=0ae7135a46b6446f95fc4159dda3334c



async function usa(){

    let req = await fetch(`https://newsapi.org/v2/top-headlines?q=usa&apiKey=21539c465b344398940491f499abdc88`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}


async function china(){

    let req = await fetch(`https://newsapi.org/v2/top-headlines?q=China&apiKey=21539c465b344398940491f499abdc88`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}


async function nepal(){

    let req = await fetch(`https://newsapi.org/v2/top-headlines?q=Nepal&apiKey=21539c465b344398940491f499abdc88`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}






// var data = JSON.parse(localStorage.getItem('data'))

async function result(t) {
    let title = document.getElementById('search').value
    let response = await fetch (`https://newsapi.org/v2/top-headlines?q=${title}&apiKey=0ae7135a46b6446f95fc4159dda3334c`)
     data =  await response.json()
    data = (data.articles)
    console.log(data)

    localStorage.setItem('data',JSON.stringify(data))
   location.assign('search.html')


}