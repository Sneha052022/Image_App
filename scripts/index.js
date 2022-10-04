//link-https://api.unsplash.com/search/photos/?query=${value}$per_page=20&client_id=YOUR_ACCESS_KEY
const API="wqMjtEf3X0G1SkkDt7QUsswl5MZsE728nmu5JQQLJ_k"

import { navbar } from "../components/navbar.js";
let n=document.getElementById('navbar')//append
n.innerHTML = navbar();

import {searchImages,append} from "./fetch.js"
let search = (e) =>{
    if(e.key==="Enter") {
        let value = document.getElementById("query").value; //we want from user
       searchImages(API,value).then((data) =>{
        
        console.log(data)
        let container=document.getElementById("container")
        container.innerHTML=null;
        append(data.results,container)
       });
      
    }
};
document.getElementById("query").addEventListener("keydown",search)

let categories=document.getElementById("categories").children;
//want to put same funcion to every element

function cSearch(){
    console.log(this.id)///arrow function this does not work
    searchImages(API,this.id).then((data) =>{
        
        console.log(data)
        let container=document.getElementById("container")
        container.innerHTML=null;
        append(data.results,container)
       });
      
    
}
for(let el of categories){
    el.addEventListener("click",cSearch)
}

////FETCH()
// let searchImages =async () =>{
//     let value = document.getElementById("query").value; //we want from user
//     try{
//         let res= await fetch(
//             `https://api.unsplash.com/search/photos/?query=${value}$per_page=20&client_id=${API}`
//         );
//         let data=await res.json();
//         console.log(data);
//     }catch(err){
// console.log(err);
//     }
// }
