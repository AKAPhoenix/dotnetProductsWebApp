//let num_per=document.getElementById('num_per');
//let hold_num=parseInt(num_per.innerText);

//Assign event listeners to less than
(function(){
    var inline_ele=document.getElementsByClassName('fa-less-than');
    console.log(Object.values(inline_ele));
    //var hlde=Object.values(inline_ele);
    for(el of Object.values(inline_ele)){
        console.log(el);
        el.addEventListener("click", (event) => {
            console.log('event target from eventListener: '+event.target)
            decrease(event.target)
            event.stopPropagation()
            event.preventDefault()
        });
    }
}());

//Assign event listeners to greater than
(function(){
    var inline_ele=document.getElementsByClassName('fa-greater-than');
    console.log(inline_ele);
    for(el of Object.values(inline_ele)){
        el.addEventListener("click", (event) => {
            console.log('event target from eventListener: '+event.target)
            increase(event.target);
            event.stopPropagation()
            event.preventDefault()
        });
    }
}());

function get_index(className,this_obj,data_attr){
    console.log('data from get_index: '+'['+className+'=' +data_attr+']')
    var fa=document.querySelectorAll('['+className+'=' +data_attr+']')
    //var fa=document.getElementsByClassName(className);
    console.log(this_obj);
    for(i=0;i<fa.length;i++){
        console.log(fa[i]);
        if (fa[i]==this_obj){
            console.log('ind '+i)
            return i
        }
    }
    console.log('Nothing found')
}

function increase(this_obj){
    console.log('this from increase '+this_obj)
    var attr=this_obj.getAttribute('data-class-greater')
    var ind=get_index('data-class-greater',this_obj,attr);
    //console.log('ind from increase func= '+ind);
    //get elements with classname periods and data attribute
    var num_per=document.querySelectorAll('.periods' + '[data-class=' + attr +']')[ind]
    //var num_per=document.getElementsByClassName('periods')[ind];
    //let num_per=this.parentElement.previousElementSibling.children[0];
    console.log(this_obj.tagName);
    let fa=document.querySelectorAll('.periods' + '[data-class=' + attr +']');
    let fan=0;
    for(i=0;i<fa.length;i++){
        fan+=parseInt(fa[i].innerText)
    }
    console.log('fan is: '+ fan)
    let tot=document.getElementById('total'+attr);
    tot.innerText=fan;
    if(parseInt(tot.innerText)>=10){

    }
    else{
        let hold_tot=parseInt(num_per.innerText);
        num_per.innerText=++hold_tot;
    }
}

function decrease(this_obj){
    //let num_per=this.parentElement.previousElementSibling.children[0];
    console.log(this_obj.tagName);
    var attr=this_obj.getAttribute('data-class-less');
    var ind=get_index('data-class-less',this_obj,attr);
    //console.log('ind from increase func= '+ind);
    console.log('data attribute is: '+ '.periods' + '[data-class=' + attr +']')
    var num_per=document.querySelectorAll('.periods' + '[data-class=' + attr +']')[ind]
    //var num_per=document.getElementsByClassName('periods')[ind];
    //let num_per=this.parentElement.previousElementSibling.children[0];
    console.log(this_obj.tagName);
    let fa=document.getElementsByClassName('periods');
    let fan=0;
/*     for(i=0;i<fa.length;i++){
        fan-=parseInt(fa[i].innerText)
    }
 */    
    if(parseInt(num_per.innerText)<=0 ){

    }
    else {
        hold_num=parseInt(num_per.innerText);
        num_per.innerText=--hold_num;
        let tot=document.getElementById('total'+attr);
        let hold_tot=parseInt(tot.innerText);
        //hold_tot=(parseInt(tot.innerText));
        tot.innerText=--hold_tot;
    }
}

(function(){
    const fa_edit1=document.getElementById('edit1')
    fa_edit1.addEventListener("click", (event) => {
        //console.log('event target from eventListener: '+event.target)
        const fas=document.getElementsByClassName('jss1')
        for(el of Object.values(fas)){
            if(el.style.visibility!="hidden"){ 
                el.style.visibility="hidden";           
            }
            else{
                el.style.visibility="visible";
            }
        }
        });
    
    const fa_edit2=document.getElementById('edit2')
    fa_edit2.addEventListener("click", (event) => {
        //console.log('event target from eventListener: '+event.target)
        const fas=document.getElementsByClassName('jss2')
        for(el of Object.values(fas)){
            console.log('inside edit listener '+el)
            console.log('Is el hidden: '+ el.style.visibility=="hidden")
            if(el.style.visibility!="hidden"){
                el.style.visibility="hidden";
                console.log('inside if statement')
            }
            else{
                el.style.visibility="visible";
            }
        }
        });

    const fa_edit3=document.getElementById('edit3')
    fa_edit3.addEventListener("click", (event) => {
        //console.log('event target from eventListener: '+event.target)
        const fas=document.getElementsByClassName('jss3')
        for(el of Object.values(fas)){
            if(el.style.visibility!="hidden"){
                el.style.visibility="hidden";
            }
            else{
                el.style.visibility="visible";
            }
        }
        });
    //console.log(fa_edit);

}());

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
/*var num_of_per=document.querySelector('[name=num_of_per]')
num_of_per.addEventListener('onfocusout',(event)=>{

})
function allowdrop(ev){
    ev.preventDefault()
}
function drag(ev){
    ev,DataTransfer.setData("text",ev.target.id)
}
function drop(ev){
    ev.preventDefault()
    var data=ev.DataTransfer.getData("text")
    ev.target.appendChild(document.getElementById(data))
}
window.onresize(()=>{
    console.log('div width is: ' + document.getElementsByClassName()[0])
})
*/
