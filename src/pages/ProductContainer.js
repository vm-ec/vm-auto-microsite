import React, { useState, useEffect } from 'react';
import { json, useParams } from 'react-router-dom';
import DynamicWizrd from '../widgets/DynamicWizrd';
import {updateQuoteModel, getRequest,mapFormData,postRequest, quoteApi} from 'sdk-library';
import { Card } from 'common';
import axios from 'axios';
 
export default function ProductContainer() {
    const params = useParams()
    const [activeStep, setActiveStep] = useState(0);
    const [activeWidget, setActiveWidget] = useState();
    const [workFlowData, setWorkFlowData] = useState({});
    const [productWorkFlow, setProductWorkFlow] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ formData ,setFormData]=useState({})
    const [resp,setResp] = useState({})
 
 
    useEffect(() => {
        getInitialWidget();
    }, []);
 
    const getInitialWidget = async () => {
        const result = await getRequest(`/${params.product}`);
        setActiveWidget(result[0]);
        setProductWorkFlow(result);
        setIsLoaded(true)
    }
    const getQuoteData = async (data,currentWidgetData) =>{
        data=JSON.stringify(data)
        const result =  await postRequest(currentWidgetData.endpoint,data);
       setActiveWidget(productWorkFlow[activeStep + 1])
     updateQuoteModel(result)
     await new Promise((resolve)=>setTimeout(resolve,500))
        const getResponse =  await  axios.get(quoteApi.endpoint)
        setTimeout(()=>{setResp(getResponse.data.item)
       },) 
    }
    const getNextWidget = (widgetData) => {
            console.log(widgetData)
            const currentPageData = widgetData?.widgetData?.fields
            console.log(currentPageData)
            const currentPageMappedData = mapFormData(currentPageData)
            setFormData((formData)=>{
               return{ ...formData,...currentPageMappedData}
            })
       
 
        setActiveStep(activeStep + 1);
        if(activeStep < productWorkFlow.length-2){
        setActiveWidget(productWorkFlow[activeStep + 1])
        }
        else{
            getQuoteData(formData,productWorkFlow[activeStep + 1])
            setActiveStep(0)
 
        }
         
        setWorkFlowData({
            ...workFlowData,
            [activeWidget.name]: widgetData
        });
    }
 
    const getPreviousWidget = (widgetData) => {
        setActiveWidget(productWorkFlow[activeStep - 1])
        setActiveStep(activeStep - 1);
        setWorkFlowData({
            ...workFlowData,
            [activeWidget.name]: widgetData
        });
 
    }
 
    const renderWidget = (widget) => {
        return <DynamicWizrd
            getPreviousWidget={getPreviousWidget}
            getNextWidget={getNextWidget}
            workFlowData={workFlowData}
            activeWidget={widget}
            getInitialWidget={getInitialWidget}
            resp={resp}
        />
    }
    return (
        <div className='product-form'>
            {isLoaded && renderWidget(activeWidget)}
        </div>
    )
}