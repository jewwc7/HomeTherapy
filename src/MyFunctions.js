import AsyncStorage from '@react-native-async-storage/async-storage';

function createUniqueArr(array, property = null){
    if(!property) return Array.from(new Set([...array]))
    if(property){
        const newArray = array.map(item => item[property])
        return Array.from(new Set([...newArray]))
    } 
    
}

function animatedTimeOuts(sharedValue, newValue,timeOut){
    setTimeout(()=>{
     sharedValue.value = newValue
    }, timeOut)
}

async function setJSONValue(value, valueName){
    const stringfiedValue = JSON.stringify(value) 
    try {
      await AsyncStorage.setItem(valueName, stringfiedValue)
      return
    } catch(e) {
       console.log(e)
    }
    console.log(stringfiedValue)
  }


export { 
     createUniqueArr,
     animatedTimeOuts,
     setJSONValue,
    }