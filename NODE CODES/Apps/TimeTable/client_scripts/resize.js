var element
var ele_className
var original_mousex
var old_elementx
var old_elementw
var old_elementh
var top, bottom
var we
var addwidth
var new_mousex
var element_width
var overflow=false

var mousemove=function (e){
    //e=we;
    if(e.clientY<top){
        console.log('way above the top')
        return
    }
    if(e.clientY>bottom){
        console.log('way below the bottom')
        return
    }
}
/*     if (element==null){

    } else{}
 */    
/*     if(!e.target.className.includes(ele_className)){
        console.log('element className is')
        console.log(e.target.className)
        return
    }
 */    console.log('i am moving')
    //alert('element count: '+ele_count)
        function utility(e){
            console.log('object e is: ')
            // console.log(e)
            new_mousex=parseFloat(e.clientX)
            element_width=parseFloat(element.offsetWidth)
    
            console.log(`old_mousex: ${original_mousex}\n
                        new_mousex: ${new_mousex}\n
                        old_elementx: ${old_elementx}\n
                        new_elementx:${element.getBoundingClientRect().left}\n
                        old_elementw: ${old_elementw}\n
                        new_elementw: ${element.offsetWidth}`);
    
                        //console.log(element_width-(new_mousex-original_mousex)+'px')
            //element.style.left=new_mousex+'px';//+(new_mousex-original_mousex)
            var totalwidth=0
            var parentaddwidth=document.querySelectorAll('.parentaddwidth')[0]
            console.log(Object.values(parentaddwidth.children))
            for (obj of Object.values(parentaddwidth.children)){
                totalwidth+=obj.offsetWidth
    /*             console.log("totalwidth is: " + obj.offsetWidth)
                console.log("totalwidth is: " + totalwidth)
     */            if (obj==element)break
            }
            totalwidth=parseFloat(totalwidth)
            console.log("totalwidth is: " + totalwidth)
            console.log('new_mousex is '+new_mousex)
            console.log('totalwidth-new_mousex is '+(totalwidth-new_mousex))
            console.log('exapnding to: '+ totalwidth+(new_mousex-original_mousex))
            console.log(parseFloat(document.querySelector('.parentaddwidth').offsetWidth))
            if ((totalwidth+(new_mousex-original_mousex))>parseFloat(document.querySelector('.parentaddwidth').offsetWidth)){
                console.log('(totalwidth+(new_mousex-original_mousex)) '+(totalwidth+(new_mousex-original_mousex)))
                console.log("parseFloat(document.querySelector('.parentaddwidth').offsetWidth) "+parseFloat(document.querySelector('.parentaddwidth').offsetWidth))
                overflow=true
                console.log('you cant resize past the parent container width')
                return
            }
            if(e.target.className=="h-100"){
                console.log('cursor is out of border')
                return
            }
    
            if(new_mousex-original_mousex<0){
                console.log('Mouse is moving backward')
            }else{
                console.log('Mouse is moving forward')
            }
        }
/*         //if new mouse position has moved from the original FMP-first mouse position.
        //then stop resizing 
        if(new_mousex-FMP>20){
            
        }
 */        
        //if totalwidth-new_mousex is less than the border width + the margin(in this case, margin is omitted or 0)
        //we are at the right border of the element
        //else, we are at the left border of the element
        //if((totalwidth-new_mousex)<=5)
        var mlt5=function mouseLT5(e){
            console.log('we are at the right border of the element')
            utility(e)
            if(overflow==true){
                console.log('an overflow occured')
                overflow=false
                return
            }
            //we want to increase the width of the element
            if(new_mousex>original_mousex){
                console.log('comparing target versus last child')
                console.log(we.target)
                console.log(document.querySelectorAll(".parentaddwidth>div:last-child")[0])
                //if the element is the last child
                if (we.target==document.querySelectorAll(".parentaddwidth>div:last-child")[0]){
                    element.style.width=element_width+(new_mousex-original_mousex)+'px';
                }
                else{
                    element.style.width=element_width+(new_mousex-original_mousex)+'px';
                    element.nextElementSibling.style.width=element.nextElementSibling.offsetWidth-(new_mousex-original_mousex)+'px'
                }
            }
            //we want to reduce the size of the element
            else if (new_mousex<original_mousex){
                //if the element the last child
                if (we.target==document.querySelectorAll(".parentaddwidth>div:last-child")[0]){
                    element.style.width=element_width-(original_mousex-new_mousex)+'px';
                }
                else{
                    console.log('im damn hereeeee reducing lt5')
                    console.log('element_width: '+element_width)
                    console.log('element_width-(original_mousex-new_mousex): '+element_width-(original_mousex-new_mousex))
                    element.style.width=element_width-(original_mousex-new_mousex)+'px';
                    element.nextElementSibling.style.width=element.nextElementSibling.offsetWidth+(original_mousex-new_mousex)+'px'
                }
            }
            original_mousex=new_mousex
        }
        //we are at the left border of the element
        //else
        var mgt5=function mouseGT5(e){
            console.log('we are at the left border of the element')
            utility(e)
            if(overflow==true){
                console.log('an overflow occured')
                overflow=false
                return
            }
                //we want to reduce the element width
                if(new_mousex>original_mousex){
                    //the element resized is the first element
                    if (we.target==document.querySelectorAll(".parentaddwidth>div:first-child")[0]){
                        
                    }
                    else{
                        console.log('prev element is')
                        console.log(element.previousElementSibling)
                        //console.log(element.previousElementSibling.offsetWidth)
                        element.previousElementSibling.style.width=element.previousElementSibling.offsetWidth+new_mousex-original_mousex+'px'
                        element.style.width=element_width-(new_mousex-original_mousex)+'px';
                        // element.style.width="500px"
                        console.log(element_width-(new_mousex-original_mousex))
                        console.log('enoent is: '+' px')
                        console.log('clientX is: '+ new_mousex)
                        console.log('width is: '+ parseFloat(element.offsetWidth))
                    }
        
                }
                    //we want to increase the width of the element
                else if (new_mousex<original_mousex){
                    if (we.target==document.querySelectorAll(".parentaddwidth>div:first-child")[0]){
                        
                    }
                    else{
                        console.log('new mousex is less than original mousex')
                        element.previousElementSibling.style.width=element.previousElementSibling.offsetWidth-(original_mousex-new_mousex)+'px'
                        element.style.width=element_width+(original_mousex-new_mousex)+'px';
                    }
                    
                }
                original_mousex=new_mousex
            }
        //console.log(element.getBoundingClientRect().left)
/*         console.log('e.target in mousemove is: ')
        console.log(e.target)
        console.log('e.target.firstChild is: ')
        console.log(e.target.firstElementChild)
*/
        //original_mousex=new_mousex
     
    //console.log(e.target)
    //e.style.width = e.clientX - element.getBoundingClientRect().left + 'px'

var anony= function (){
    var resizer=document.querySelectorAll('.resizer')
    for(obj of Object.values(resizer)){
        obj.addEventListener('mousedown', function(e){
            
/*             var pdl=document.querySelectorAll('.parentdiv')[0].getBoundingClientRect().left
            console.log('parentdiv left is'+pdl)
 */         
/*             var addwidth=document.querySelectorAll('.addwidth')[0]
            addwidth.style.width="400px"
 */            we=e;
            e.preventDefault()
            e.stopPropagation()
            element=e.target

            var ele_count=e.target.childElementCount
            right=parseFloat(element.getBoundingClientRect().left)
            old_elementx=parseFloat(element.getBoundingClientRect().left)
            old_elementw=parseFloat(e.target.offsetWidth)
            original_mousex=parseFloat(e.clientX)
            old_elementh=parseFloat(e.target.offsetHeight)
            
            top=element.getBoundingClientRect().top;
            bottom=element.getBoundingClientRect().bottom;
            console.log('top is: '+top +'\n' + 'bottom is: '+bottom  +'\n' + 'x is: '+old_elementx)

            ele_className=obj.className;
            document.body.style.cursor="ew-resize";
/*             e.target.style.position='relative';
            e.target.style.height=old_elementh+"px";
            e.target.style.left=old_elementx+"px";
            e.target.style.width=old_elementw+"px";
 */
            console.log('e.target in mousedown is: ')
            console.log(e.target)
                //element=e.target.firstElementChild

            //e.preventDefault();
            var totalwidth=0
            var parentaddwidth=document.querySelectorAll('.parentaddwidth')[0]
            console.log(Object.values(parentaddwidth.children))
            for (obj of Object.values(parentaddwidth.children)){
                totalwidth+=obj.offsetWidth
    /*             console.log("totalwidth is: " + obj.offsetWidth)
                console.log("totalwidth is: " + totalwidth)
     */            if (obj==element)break
            }
            console.log("totalwidth is: " + totalwidth)
            console.log('mouse location is: '+parseFloat(e.clientX) )

            if((totalwidth-parseFloat(e.clientX))<=5){
                console.log('in mousedown less than 5')
                console.log('we are at the right border of the element')
                document.body.addEventListener('mousemove',mlt5
                )
                document.body.addEventListener('mouseup',function (){
                    console.log('in mouseup eventListener')
                    document.body.removeEventListener('mousemove',mlt5)
                    document.body.style.cursor="default";
    
                }
                )
            }
            else{
                console.log('in mousedown greater than 5555')
                console.log('we are at the left border of the element')
                document.body.addEventListener('mousemove',mgt5
                )
                document.body.addEventListener('mouseup',function (){
                    console.log('in mouseup eventListener')
                    document.body.removeEventListener('mousemove',mgt5)
                    document.body.style.cursor="default";
    
                }
                )
            }


        })
    }
}
function generateEmptyTable(){
    var rows=5
    
}
function generateTable(){
    ele_values=[]
    time_elements=Object.values(document.querySelectorAll('.resizer>.h-100'))
    for(ele of time_elements){
        ele_values.push(ele.innerText)
    }

}
/*function resize(){
    console.log('i am moving')
    e.style.width = e.clientX - element.getBoundingClientRect().left + 'px'
}
*/
/*function remove(){
    obj.removeEventListener('mousemove',function (){
        console.log('mousemove removed')
    })
}
*/
anony()