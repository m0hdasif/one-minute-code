module.exports.bubbleSort = (array,compareFn)=>{
    if(!Array.isArray(array)){
        throw new Error('Not an Array');
    }
    let sortedArray = [...array];
    if(typeof compareFn!=="function"){
        compareFn = function(a,b){
            return a-b;
        }
    }
    let passCount=0;
    // handling undefined or null conditions
    let validElementLength = sortedArray.length;
    for (let i = 0,j=sortedArray.length-1; i < sortedArray.length; i++) {
        if(!sortedArray[i]){
            while(!sortedArray[j]&&j>i){
                j--;
            }
            if(!sortedArray[i]){
                
                if(sortedArray[j]){
                    passCount++;
                    [sortedArray[i],sortedArray[j]] = swap(sortedArray[i],sortedArray[j]);
                }
            } 
            if(i>j){
                validElementLength = j+1;
                break;
            }
        }
    }
    // bubble sort program
    for (let i = 0; i < validElementLength; i++) {
        for (let index = 0; index < validElementLength; index++) {
            //  Handle non valid values inline
            // if(!sortedArray[index] && sortedArray[index+1]){
            //     passCount++;
            //     [sortedArray[index],sortedArray[index+1]] = swap(sortedArray[index],sortedArray[index+1]);
            // } else 

            if(compareFn(sortedArray[index],sortedArray[index+1])>=0){
                passCount++;
                [sortedArray[index],sortedArray[index+1]] = swap(sortedArray[index],sortedArray[index+1]);
            } 
        }
    }
    console.log("ASIF: module.exports.bubbleSort -> count", passCount);
    return sortedArray;
}




function swap(a,b){
    return [b,a];
}
