// Use Fetch to get the Details in the Api link.

let cats = fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME");

// Use .then method to handle the promise
// And json() to convert to readable stream

cats.then((data)=> data.json()).then((data1)=> {
    console.log(data1);
    for (let animals in data1){
        console.log(animals, data1[animals]);

// Create a element and add the data inside the Tag using innerhtml

let animalimage = document.createElement("div");
animalimage.setAttribute("class","body")
animalimage.innerHTML = `

<div class="container">
<img style="width:100%;height:800px;" class="img1" src="${data1[animals].url}">
<p>ID NAME:${data1[animals].id}</p>
</div>
`
// Finally append the data inside the body
document.body.append(animalimage)

    }
}).catch((Error)=>{
    
    Alert("Error")

})
