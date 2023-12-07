function customRender(reacElement, container){
    /*
 const domElement= document.createElement(reacElement.type)
 domElement.innerHTML=reacElement.children
 domElement.setAttribute('href',reacElement.props.href)
 domElement.setAttribute('target',reacElement.props.target)
 container.appendChild(domElement)
}
*/

const domElement=document.createElement(reacElement.type)
domElement.innerHTML= reacElement.children
 for(const prop in reacElement.props){
    if(prop==='children') continue;
domElement.setAttribute(prop,reacElement.props[prop])
 }
 container.appendChild(domElement)
}

const reacElement={
    type : 'a',
    props:{
        href:'#',
        target:'_blank'
    },
    children:"click me to visit"
}
const mainContainer= document.getElementById("root");
customRender(reacElement,mainContainer)