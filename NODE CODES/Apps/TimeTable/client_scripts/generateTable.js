function generateTable(){
    cols=document.getElementsByClassName('resizer').length
    rows=parseInt(document.getElementById('max_period').value)
    var num_cls=document.getElementsByClassName('classes').length
    var classes=Object.values(document.getElementsByClassName('classes'))
    var classes_obj={}
    var subjects_periods={}
    var subjects=Object.values(document.getElementsByClassName('subjects'))
    var periods=Object.values(document.getElementsByClassName('periods'))


    function Class_obj(sub_obj,arr_sub,class_n){
        this.subjects=sub_obj
        this.day_subjects=[]
        this.class=class_n
        this.subj_arr=arr_sub
    }
    
/*  
classes_obj object form   
    {
        jss1,
        jss2,
        ....
    }
 */    
obj_arr=[]
    for(cls of classes){
        var OBSB={},ARSB=[]
        sub_per=document.querySelectorAll('span[data-class='+(cls.innerText).toLowerCase()+"]")
        console.log(sub_per)
        console.log('after sub_per '+cls.innerText)
        for(per of Object.values(sub_per)){
            if(parseInt(per.innerText)<=0){
                console.log(per)
            }
            else{
                sub_name=per.parentElement.parentElement.firstElementChild.innerText
                OBSB[sub_name]=parseInt(per.innerText)
                ARSB.push(sub_name)
                console.log('sub_name'+sub_name)
            }
        }
        obj_arr.push(new Class_obj(OBSB,ARSB,cls.innerText))
        //classes_obj[cls.innerText]
    }
    console.log(obj_arr)

/*     
subjects object form
    {
        english:    {
                        jss1,
                        jss2,
                        ....
                    },
        computer:   {
                        jss1,
                        jss2,
                        ....
                    },
    }
 */    
//populate the object with the number of periods in a week
    var ind=0;
    for(sub of subjects){
        subjects_periods[sub]=Object.assign({}, classes_obj)
        for (obj in subjects_periods[sub]){
            subjects_periods[sub][obj]=periods[ind++]
        }
    }


    var tr
    var td
    var table=document.createElement('table')
    var tbody=document.createElement('tbody')

    var max_per=parseInt(document.getElementById('max_per').value)
    var periods=parseInt(document.getElementById('max_period').value)
    var count=0
    var rs
    var np
    //table.appendChild(body)
    console.log('rows is '+rows)
    for (i=0;i<rows;i++){
                for (obj of obj_arr){
                    tr=document.createElement('tr')
                    td=document.createElement('td')
                    td.innerText=obj.class
                    tr.appendChild(td)
                    console.log('count is '+count+'\n' + 'periods length is '+periods )
                    var total_time=0;
                    for(key in obj.subjects){
                        total_time+=parseInt(obj.subjects[key])
                    }
                    var empty_per=periods*rows-total_time;
                    if(empty_per>0){
                        obj.subjects.empty_periods=empty_per;
                        var ind_find = obj.subj_arr.findIndex(item => item == "empty_periods")
                        if(ind_find==-1){
                            obj.subj_arr.push('empty_periods')
                        }
                    }
                    while(count<=periods){
                        if(obj.subj_arr.length==0){
                            obj.day_subjects.push("")
                            count++
                        }
                        else{
                            //pick subject number
                            rs=Math.floor(Math.random()*(obj.subj_arr.length))

                            //pick how many periods. Should be between 1 and max_per
                            np=Math.floor(Math.random()*max_per)+1

                            console.log('count is less than periods '+periods)

                            //if the subject is not in that day
                            var num=0;
                            var reduce=obj.day_subjects.reduce(function(acc,val){
                                if(val==obj.subj_arr[rs]){
                                    num++
                                }
                                return num
                            },0)
                            if(reduce<max_per || obj.subj_arr[rs]=="empty_periods"){
                                if(np==1){
                                    console.log('rs is '+rs)
                                    console.log('np is '+np)
                                    obj.day_subjects.push(obj.subj_arr[rs])
                                    console.log('Before obj.subjects[obj.subj_arr[rs]] '+obj.subjects[obj.subj_arr[rs]])
                                    //decrement subject
                                    obj.subjects[obj.subj_arr[rs]]--
    
                                    console.log('After obj.subjects[obj.subj_arr[rs]] '+obj.subjects[obj.subj_arr[rs]])
                                    
                                    if(obj.subjects[obj.subj_arr[rs]]==0){
                                        //remove the subject
                                        var index = rs;
                                        if(index !== -1) { console.log('before '+ obj.subj_arr);
                                        obj.subj_arr.splice(index , 1); 
                                        console.log('After '+ obj.subj_arr);
                                        } 
                                    }
                                count++
                                }
                                else if(np>1){
                                    console.log('np ' +np + ' is greater than one')
                                    for(ss=0;ss<np;ss++){
                                        console.log('rs is '+rs)
                                        //decrement subject
                                        obj.subjects[obj.subj_arr[rs]]--
                                        obj.day_subjects.push(obj.subj_arr[rs])
    
                                        if(obj.subjects[obj.subj_arr[rs]]==0){
                                            //remove the subject
                                            var index = rs;
                                            if(index !== -1) { obj.subj_arr.splice(index , 1); } 
                                            break
                                        }
    
                                        count++
                                    }
                                }
                            }
/*                             else if(obj.subj_arr.length==1){
                                obj.subjects[obj.subj_arr[rs]]--
                                obj.day_subjects.push(obj.subj_arr[rs])

                                if(obj.subjects[obj.subj_arr[rs]]==0){
                                    //remove the subject
                                    var index = rs;
                                    if(index !== -1) { obj.subj_arr.splice(index , 1); } 
                                    break
                                }

                                count++
                            }
 */                                                        
                        }
                    }
                    count=0
                    for(kk=0;kk<periods;kk++){
                        td=document.createElement('td')
                        td.innerText=obj.day_subjects[kk]
                        tr.appendChild(td) 
                    }
                    tbody.appendChild(tr)
                    obj.day_subjects=[]
                }
    }
    table.appendChild(tbody)
    document.body.appendChild(table)
}