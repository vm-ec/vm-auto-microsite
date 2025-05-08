import React, { useEffect, useState } from 'react';
import { validateFormFieldsNewMethod } from 'custom-claims';
import { getRequest,validateFormFields } from 'sdk-library';

import _ from 'lodash';
import { TextInput, Select, Button, Heading, Text, CheckBox, Card, RadioButton, Alert, Row, Col, Table, ApiTabs } from '../common';


const DynamicWizrd = ({ getPreviousWidget, getNextWidget, workFlowData, activeWidget,resp,getInitialWidget }) => {
    const [widgetFields, setWidgetFields] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [errorMsg, setErrorMsg] = useState(undefined);
    const [quoteData,setQuoteData] = useState(resp)
    let formData = {}
    console.log(".............resp..........",resp)
  
    useEffect(()=>{
        console.log('widgetFields', widgetFields);
    },[widgetFields])
    useEffect(() => {
        if (workFlowData[activeWidget.name]) {
            setWidgetFields(workFlowData[activeWidget.name].widgetData)
        } else {
            getWidgetFields();
        } 
    }, [activeWidget, workFlowData,resp])

    const getWidgetFields = async () => {
        console.log(".......activeWidget.endpoint.................",activeWidget.endpoint)
        if(activeWidget.name!=="Quote"){
        const result = await getRequest(activeWidget.endpoint);
        console.log("................result......",result)
        setWidgetFields(result);
        setIsLoaded(true)
        }
        else{
            setWidgetFields(resp);
            setIsLoaded(true)
        }
    };

    const handleChange = async(name, value) => {
        setWidgetFields((prevData) => ({
            ...prevData,
            fields: prevData.fields.map((field, fIndex) =>
                field.name === name
                    ? {
                        ...field,
                        value: value
                    }
                    : field
            ),
        }));

        const childField = widgetFields.fields.find(f => f.dependentOn === name);
        if (childField) {
            const params = {[name]: value}
            const url = replaceRouteParams(childField.optionsAPI, params);
            const childOptions = await getRequest(url);
            const updatedFormWithChild = widgetFields.fields.map(field => {
                if (field.name === childField.name) {
                    return { ...field, options: childOptions };
                }
                return field;
            });
            console.log('childField', childOptions, childField);
            setWidgetFields((prevData) => ({
                ...prevData,
                fields: prevData.fields.map((field, fIndex) =>
                    field.name == childField.name
                        ? {
                            ...field,
                            options: childOptions
                        }
                        : field
                ),
            }));
        }
    };

    const renderFields = (fields) => {
        console.log(fields)
        return fields?.flatMap((field) => {
            const renderedField = (
                <Col xl={field.width} ><InputField key={field.name} field={field} onChange={handleChange} /></Col>
            );
            if (field.options) {
                const selectedOption = field.options.find(option => option.value === field.value);
                if (selectedOption && selectedOption.childQuestion) {
                    const childField = (
                        <Col xl={field.width} ><InputField key={selectedOption.childQuestion.name} field={selectedOption.childQuestion} onChange={handleChange} /></Col>
                    );
                    return [renderedField, childField];
                    // { renderFields(selectedOption.childQuestion) }
                }
            }
            return renderedField;
        });
    };

    const renderStep = (stepInfo) => {
        console.log("------------------------->",stepInfo)
        return <>
            <section className='step-info'>
                <Row>
                    <Col>
                        {/* <Heading level={4}>{stepInfo.title}</Heading>
                        <Text weight='bold' color="primary">{stepInfo.subTitle}</Text> */}
                    </Col>
                </Row>
            </section>
            <Row>
                {renderFields(stepInfo.fields)}
            </Row>
            <Row>
                {renderButtons(stepInfo.buttons)}
            </Row>
        </>
    }

    const handleCancel = () => {
        alert('Cancel Button clicked');
    }

    const handleBack = async () => {
        // Get Previous step
        getPreviousWidget({ widgetData: widgetFields });
    }

    const replaceRouteParams = (urlTemplate, params) => {
        return urlTemplate.replace(/:([a-zA-Z]+)/g, (_, key) => {
            return params[key] || `:${key}`;
        });
    }

    const getKeyValuePairs = (field) => {
        const obj = {};
        field.map(field => {
            Object.assign(obj, { [field.name]: field.value })
        });
        return obj;
    }
    const handleNext = async () => {
        const validationReport = validateFormFields(widgetFields.fields);
        if (!validationReport.status) {
            setWidgetFields((prevData) => ({
                ...prevData,
                fields: validationReport.data
            }));
        }
        

        let externalValidationPassed = true;
        if (widgetFields.externalValidation && validationReport.status) {
            externalValidationPassed = false;
            const params = getKeyValuePairs(widgetFields.fields);
            const url = replaceRouteParams(widgetFields.externalValidation.endpoint, params);
            console.log(".........................................",url)

            try {
                const result = await getRequest(url);
                if (result?.status) {
                    externalValidationPassed = true;
                    setErrorMsg(undefined)
                } else {
                    setErrorMsg(result?.errorMsg)
                }
            } catch (error) {
                setErrorMsg("Sorry! We are not serving in the zipcode that you entered")
            }
        }

        if (validationReport.status && externalValidationPassed) {
            getNextWidget({ widgetData: widgetFields });
        }
    }
    const getHome = ()=>{
        getInitialWidget()
    }
    const eventHandlers = {
        handleBack,
        handleCancel,
        handleNext,
        getHome,

    };

    const renderButtons = (buttons) => {
        return <>
            <Col>
                {buttons?.map((button, index) => {
                    return <Button
                        label={button.label}
                        onClick={eventHandlers[button.onClickHandler]}
                        className={button.className}
                        color={button.color}
                        variant={button.variant}
                     />
                })}

            </Col>
        </>
    }

    return (
        <>
            <div className='step-form'>
                {!!errorMsg && <Alert type='error' message={errorMsg} />}
                {isLoaded &&
                    renderStep(widgetFields)}
            </div>
        </>
    );
};

const InputField = ({ field, onChange }) => {
    const [value, setValue] = useState(field.value || '');

    useEffect(() => {
        setValue(field.value);
    }, [field.value]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange(field.name, newValue);
    };

    // console.log('field', field);
    switch (field.component) {
        case 'TextInput':
            return <TextInput {...field} value={value} onChange={handleChange} />;
        case 'Select':
            return <Select {...field} value={value} onChange={handleChange} />;
        case 'Radio':
            return <RadioButton {...field} value={value} onChange={handleChange} />;
        case 'Card':
            return <Card {...field} />;
        case 'Table':
            return <ApiTabs {...field} onChange = {handleChange} />;
        default:
            return <TextInput {...field} value={value} onChange={handleChange} />;
    }
};

export default DynamicWizrd;