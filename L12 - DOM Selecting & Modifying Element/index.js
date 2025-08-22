/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/
const idname = document.getElementById('main-heading')
console.log(idname.innerText)
dommanipulation();
function dommanipulation(){
    setTimeout(()=>{
       idname.innerText = 'james is learning'
    },5000)
}

const classdom = document.getElementsByClassName('list-item')
console.log(classdom[1])
classdom[2].innerText = 'sayHi';

const tagdom = document.getElementsByTagName('p')
console.log(tagdom[0].innerText)

const tagarray = Array.from(tagdom)
console.log(tagarray)
tagarray.forEach((tags)=>{
    console.log(tags.textContent )
})
// for(i=0;i<tagarray.length;i++){
//     tagarray.item(i).styles.color='red';
// }

const subtitle = document.querySelector('#subtitle');
 console.log(subtitle );
setTimeout(()=>{
    subtitle.textContent='Changed Javascript Query Selector'
},5000)