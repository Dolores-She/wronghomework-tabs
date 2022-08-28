const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const tabBtndop = document.getElementById('tabs-btndop');
const contentDop = document.getElementById('contents-dop');


const changeClass = el => {
    console.log(el)
    
    for (let i = 0; i < tabs.children.length; i++) {
   
        tabs.children[i].classList.remove('active');
} 
   el.classList.add('active');
}

tabs.addEventListener('click', e => {   
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
   for(let i = 0; i < content.length; i++) {
       content[i].classList.remove('active');
       console.log(content[i].dataset.content);
       if(content[i].dataset.content === currTab) {
           content[i].classList.add('active');  
       }
      
       console.log(e.target);
   }
})
   
const changeAnotherClass = el => {
    console.log(el)
    
    for (let i = 0; i < tabBtndop.children.length; i++) {
        tabBtndop.children[i].classList.remove('active');
} 
   el.classList.add('active');
} 


tabBtndop.addEventListener('click', e => {   
    const currNewTab = e.target.dataset.btndop;
    changeAnotherClass(e.target);
   for(let i = 0; i < contentDop .length; i++) {
    contentDop [i].classList.remove('active');
       console.log(contentDop [i].dataset.contentdop);
       if(contentDop [i].dataset.contentdop === currNewTab) {
        contentDop [i].classList.add('active');  
       }
       console.log(e.target);
   }
})


// contentDop.addEventListener('click', e => {   
//     const currTab = e.target.dataset.contentdop;
//     changeClass(e.target);
//    for(let i = 0; i < contentDop.length; i++) {
//        contentDop[i].classList.remove('active');
//        console.log(contentDop[i].dataset.contentdop);
//        if(contentDop[i].dataset.contentdop === currTab) {
//            contentDop[i].classList.add('active');  
//        }
      
//        console.log(e.target);
//    }
// })
// console.log(tabBtndop, contentDop);










