import axios from 'axios';
import {quoteApi} from 'sdk-library';


export const mapFormData = (fieldsArray)=>{
    const dataObj={}
    fieldsArray.forEach(field=>{
        dataObj[field.name]=field.value;
    });
    return dataObj
}
const transformKey = (key) => {
    return key.replace(/([A-Z])/g, ' $1') // Add space before each capital letter
        .replace(/^./, str => str.toUpperCase()); // Capitalize the first letter
};

export const updateQuoteModel = async (result)=>{
    const transformedResult = Object.keys(result).reduce((acc, key) => {
        const newKey = transformKey(key);
        acc[newKey] = result[key];
        return acc;
    }, {});
    transformedResult.component = 'Card';
    try {
     const getResponse = await axios.get(quoteApi.endpoint)
            let currentData = getResponse.data;   
         
             currentData.item.fields=[transformedResult];

            const patchResponse = await  axios.patch(quoteApi.endpoint,currentData);
        }

   
catch(err){
    console.error("error",err)
}
}
