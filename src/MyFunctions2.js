const myFunctions = {
add: function (a,b){
    return a + b;
},
createUniqueArr: function(array, property,map){
    if(!property) return Array.from(new Set([...array]))
    if(property){
        const newArray = array.map(item => item[property])
        return Array.from(new Set([...newArray]))
    } 
},
filterArrEquality : function({array, filteredProperty, comparison,}){
    if(!filteredProperty) return array.filter(item => item === comparison)
    const filteredArray = array.filter(item => item[filteredProperty] === comparison)
    return filteredArray
},
filterArrNonEquality : function({array, filteredProperty, comparison,}){
    const filteredArray = array.filter(item => item[filteredProperty] !== comparison)
    return filteredArray
},
sortArr: function(array, property){
    const sortedArr = array.sort((a,b) => a[property]- b[property])
    return sortedArr
}, 
hasObjectKey : function(object ={}, key){ //boolean
   return object.hasOwnProperty(key) ? true : false
},
isGreaterThan : function(comparison = 0, object = 0,key){ //boolean
    if(key){  
     return object[key] > comparison ? true: false
    }
    return object > comparison? true: false
},
isLessThan : function(comparison = 0, object = 0,key){ //boolean
    if(key){  
     return object[key] < comparison ? true: false
    }
    return object < comparison? true: false
},
isEqualTo : function(comparison = 0, object = 0,key){ //boolean
    if(key){  
     return object[key] === comparison ? true: false
    }
    return object === comparison ? true: false
},

}

const dummyArr = [{name:'josh', age:15, },{name:'wasington', age:15, },{name:'juwan', age:15, },{name:'chris', age:15, },{name:'josh', age:15, }]


export default myFunctions;