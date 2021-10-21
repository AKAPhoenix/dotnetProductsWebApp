
module.exports=function wrapper (){
    var kk=0;
    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }
    
    
    function isPlainObject(obj) {
        return isObject(obj) && (
            obj.constructor === Object  // obj = {}
            || obj.constructor === undefined // obj = Object.create(null)
        );
    }

    return function mergeDeep(target, ...sources) {
            kk++;

            if (!sources.length) return target;
            const source = sources.shift();

            if(Array.isArray(target)) {
                /*
                inserted this block of code
                */
                if(Array.isArray(source)) {
                    for(arr in source){
                        if (arr in target){

                        }
                        else{
                            target.push(arr)
                        }
                    }
                
                    //i commented out the below code
                    //target.push(...source);
                } else {
                    target.push(source);
                }
            } else if(isPlainObject(target)) {
                if(isPlainObject(source)) {
                    for(let key of Object.keys(source)) {
                        
                        if(!target[key]) {
                            target[key] = source[key];
                        } else {
                            if (kk>5000){
                                //console.log(kk+" iterations reached")
                                return
                                //kk--
                            }
                            else{
                                try{
                                    mergeDeep(target[key], source[key]);
                                }
                                catch(e){
                                    return
                                }
                            }
                        }
                    }
                } else {
                    throw new Error(`Cannot merge object with non-object`);
                }
            } else {
                target = source;
            }
        kk--
            //return mergeDeep(target, ...sources);
}
};