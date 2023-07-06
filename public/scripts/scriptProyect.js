
const dataProjects=[
    {
        image:"../img/image48.png",
        name:'PROYECTO 1',
        color:'B90909'
    },
    {
        image:"../img/image49.png",
        name:'PROYECTO 2',
        color:'#052b3b'
    },
    {
        image:"../img/image50.png",
        name:'PROYECTO 3',
        color:'#101a1b'
    }
]

const cardProyects=document.querySelector('.cardsProyects');

const postMethods=()=>{
    dataProjects.map(({name,image,color})=>{
        
        const postElement=document.createElement('div');
        postElement.classList.add('card-slider');
        postElement.innerHTML=`
            <div class="card-IMAGE">
                <img src=${image}>
            </div>
            <div class="card-name">
                <h1>${name}</h1>
            </div>
        `;
        // console.log(postElement)
        postElement.style.backgroundColor=color
        cardProyects.appendChild(postElement);
    })
}
postMethods()

let items=document.querySelectorAll('.cardsProyects .card-slider');
let next=document.getElementById('next');
let prev=document.getElementById('prev');

let active=0;
function loadShow(){
    let stt=0;
    items[active].style.transform=`none`;
    items[active].style.zIndex=1;
    items[active].style.filter='none';
    items[active].style.opacity=1;
    items[active].style.transition='transform 0.4s'
    for(var i=active +1; i<items.length;i++){
        stt++;
        items[i].style.transform=`translateX(${300*stt}px) scale(${1-0.2*stt}) perspective(16px) `;
        items[i].style.zIndex=-stt;
        items[i].style.filter='blur(1px)';
        // items[i].style.opacity=stt>2 ? 0 :0.8;

    }
    stt=0;
    for(var i=active -1; i>=0;i--){
        stt++;
        items[i].style.transform=`translateX(${-300*stt}px) scale(${1-0.2*stt}) perspective(16px)`;
        items[i].style.zIndex=-stt;
        items[i].style.filter='blur(1px)';
        // items[i].style.opacity=stt>2 ? 0 :0.8;
    }
    if (active==items.length-1){
        console.log('FIn')
        stt=1;
        items[0].style.transform=`translateX(${300*stt}px) scale(${1-0.2*stt}) perspective(16px)`;
        items[0].style.zIndex=-1;
        items[0].style.filter='blur(1px)';
        // items[0].style.opacity=stt>2 ? 0 :0.8;
    }
    if (active==0){
        console.log('Ini')
        stt=1;
        items[items.length-1].style.transform=`translateX(${-300*stt}px) scale(${1-0.2*stt}) perspective(16px)`;
        items[items.length-1].style.zIndex=-1;
        items[items.length-1].style.filter='blur(1px)';
        // items[items.length-1].style.opacity=stt>2 ? 0 :0.8;
    }
    

}
loadShow();

next.onclick=function(){
    if (active==items.length-1){
        active=-1
    }
    active=active+1 <items.length? active+1:active;
    
    loadShow();
}
prev.onclick=function(){
    if (active==0){
        active=items.length
    }
    active=active-1 >=0?active-1:active;
    loadShow();
}
