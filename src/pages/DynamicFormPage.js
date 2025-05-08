// DynamicForm.js
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { SBIWorkFlow } from './Models/dynamicFormConfig';
import { TextInput, Select, Button, Heading, Text, CheckBox, RadioButton, Table } from '../common';
import { validateFormFields } from 'sdk-library';
import './DynamicForm.css';

const DynamicForm = () => {
    const [productConfig, setProductConfig] = useState(_.cloneDeep(SBIWorkFlow));
    const [activeStep, setActiveStep] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductConfig((prevData) => ({
            ...prevData,
            step: prevData.step.map((step, sIndex) =>
              sIndex === activeStep
                ? {
                    ...step,
                    fields: step.fields.map((field, fIndex) =>
                    field.name === name
                        ? {
                            ...field,
                            value: value
                          }
                        : field
                    ),
                  }
                : step
            ),
          }));
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // let hasErrors = false;
        // const newErrors = {};

        // formConfig.fields.forEach((field) => {
        //   const error = validateField(field, formData[field.name]);
        //   if (error) {
        //     newErrors[field.name] = error;
        //     hasErrors = true;
        //   }
        // });

        // setErrors(newErrors);

        // if (!hasErrors) {
        //   console.log('Form data submitted:', formData);
        //   // Submit form data here
        // }
    };

    const renderFields = (fields) => {
        {
            return fields.map((field, index) => {
                console.log('ff', field);
                switch (field.component) {
                    case 'TextInput':
                        return <TextInput {...field} onChange = {handleChange} />;
                    case 'Select':
                        return <Select {...field} onChange = {handleChange} />;
                    case 'Radio':
                        return <RadioButton {...field} onChange = {handleChange} />;
                    case 'Table':
                        return <Table {...field} onChange = {handleChange} />;
                    default:
                        return <TextInput {...field} onChange = {handleChange} />;
                }
            })
        }
    }

    const renderStep = (stepInfo, stepIndex) => {
        return <>
            <div>
                <section className='step-info'>
                <Heading level={4}>{stepInfo.title}</Heading>
                <Text weight='bold' color="primary">{stepInfo.subTitle}</Text>
                </section>
                {renderFields(stepInfo.fields)}
                {renderButtons(stepInfo.buttons)}
            </div>
        </>
    }

    const handleCancel = () => {
        alert('Cancel Button clicked');
    }

    const handleNext = () => {

        const validationReport = validateFormFields(productConfig.step[activeStep].fields);
        // const externalValidationRequired = !!productConfig.step[activeStep].externalValidation;
        // if (externalValidation) {

        // }
        if (!validationReport.status) {
            setProductConfig((prevData) => ({
                ...prevData,
                step: prevData.step.map((step, sIndex) =>
                  sIndex === activeStep
                    ? {
                        ...step,
                        fields: step.fields.map((field, fIndex) =>
                            field
                        ),
                      }
                    : step
                ),
            }));
        }

        if (productConfig.step.length > activeStep + 1 && validationReport.status ) {
            setActiveStep(activeStep + 1);
        }
    }

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    }

    const eventHandlers = {
        handleSubmit,
        handleCancel,
        handleNext,
        handleBack,
    };

    const renderButtons = (buttons) => {
        return <>
            <div>
                {buttons.map((button, index) => {
                    return <Button
                        label={button.label}
                        onClick={eventHandlers[button.onClickHandler]}
                        className={button.className}
                        color={button.color}
                        variant={button.variant}
                    />
                })}

            </div>
        </>
    }

    return (
        <>
            <div className='product-form'>
                {productConfig.step.filter((step, index) => {
                    return activeStep === index;
                })
                    .map((stepInfo, stepIndex) => {
                        return renderStep(stepInfo, stepIndex);
                    })}
            </div>
        </>
    );
};

export default DynamicForm;
