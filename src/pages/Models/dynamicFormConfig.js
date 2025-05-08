export const SBIWorkFlow = {
    step: [
        {
        title: 'Let\'s build your profile.',
        subTitle: 'Creating a profile will help us give you a more accurate quote.',
        fields: [
            {
                label: 'Search for your business type',
                value: '',
                name: 'businessType',
                isValid: true,
                palceholder: '',
                component: 'Select',
                options: [
                    { label: 'Type 1', value: 'type1' },
                    { label: 'Type 2', value: 'type2' },
                ],
                validationRules: {
                    required: {
                        value: true,
                    },
                },
                dependentApiUrl: 'http://google.com',
            },
        ],
        buttons: [
            {
                label: 'Next',
                color: 'primary',
                className: 'space-3 space-left-0',
                onClickHandler: "handleNext",
            },
            
        ],
        externalValidation:{
            endpoint: "",
            inputParams: {

            }
        }
    },
    {
        title: 'Tell us about your business.',
        // subTitle: '',
        fields: [
            {
                label: 'How\'s your business structured?',
                value: '',
                name: 'businessStructure',
                isValid: true,
                palceholder: '',
                component: 'Select',
                options: [
                    { label: 'Sole Proprietorship', value: 'Sole Proprietorship' },
                    { label: 'Partnership', value: 'Partnership' },
                    {label: 'Limited Partnership', label: 'Limited Partnership'},
                    {label: 'Limited Liability Partnership', label: 'Limited Liability Partnership'}
                ],
                validationRules: {
                    required: {
                        value: true,
                    }
                }
            },
            {
                label: 'Is your business run out of your home?',
                value: '',
                name: 'BusinessFromHome',
                isValid: true,
                palceholder: '',
                component: 'Radio',
                options: [
                    { label: 'Yes', value: 'Yes' },
                    { label: 'No', value: 'No' },
                ],
                validationRules: {
                    required: {
                        value: true,
                    },
                }
            },
            {
                label: 'Street Address',
                value: '',
                name: 'addressLine1',
                isValid: true,
                allowedFormat: '[0-9A-Za-z ,]',
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: true,
                    },
                    minLength: {
                        value: 5,
                        errorMessage: 'Length should be at least 5 characters.'
                    },
                    maxLength: {
                        value: 20,
                        errorMessage: 'Length should be lessthan 20 characters'
                    },
                }
            },
            {
                label: 'Suite or unit number',
                value: '',
                name: 'addressLine2',
                isValid: true,
                allowedFormat: '[0-9A-Za-z ,#]',
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: true,
                    },
                    minLength: {
                        value: 5,
                        errorMessage: 'Length should be at least 5 characters.'
                    },
                    maxLength: {
                        value: 20,
                        errorMessage: 'Length should be lessthan 20 characters'
                    },
                }
            },
            {
                label: 'City',
                value: '',
                name: 'city',
                isValid: true,
                allowedFormat: '[0-9A-Za-z ,\']',
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: true,
                    },
                }
            },
            {
                label: 'State',
                value: '',
                name: 'state',
                isValid: true,
                palceholder: '',
                component: 'Select',
                options:[
                    {label: 'Alabama', value: 'AL'},
                    {label: 'Alaska', value: 'AK'},
                    {label: 'Arizona', value: 'AR'},
                ],
                validationRules: {
                    required: {
                        value: true,
                    },
                }
            },
            {
                label: 'Zip Code',
                value: '',
                name: 'zipCode',
                isValid: true,
                allowedFormat: '[0-9A-Za-z ,\']',
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: true,
                    },
                }
            },  
            {
                label: 'What\'s the approximate square footage of your office or workspace?',
                value: '',
                name: 'space',
                isValid: true,
                allowedFormat: '[0-9A-Za-z ,\']',
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: true,
                    },
                }
            },  
            {
                label: 'How many business locations do you own or rent?',
                value: '',
                name: 'branches',
                isValid: true,
                allowedFormat: '[0-9A-Za-z ,\']',
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: true,
                    },
                }
            },            
        ],
        buttons: [
            {
                variant: 'outlined',
                label: 'Back',
                color: 'secondary',
                className: 'space-3 space-left-0',
                onClickHandler: "handleBack",
            },
            {
                label: 'Next',
                color: 'primary',
                className: 'space-3 space-right-0',
                onClickHandler: "handleNext",
            },
           
        ]
    },
    {
        title: 'Let\'s get some details about your business.',
        fields: [
            {
                label: 'First and Last Name',
                value: '',
                name: 'fullName',
                isValid: true,
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: true,
                    },
                }
            },
            {
                label: 'Doing business as, or DBA',
                value: '',
                name: 'lastName',
                isValid: true,
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: true,
                    },
                }
            },
            {
                label: 'What\'s your expected annual revenue?',
                value: '',
                name: 'email',
                isValid: true,
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: false,
                    },
                    pattern: {
                        value: 'EMAIL',
                    }
                }
            },
            {
                label: 'What\'s your expected annual revenue?',
                value: '',
                name: 'phone',
                isValid: true,
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: false,
                    },
                    regexPattern: {
                        value: /^\d+$/,
                        errorMessage: 'please enter valid number',
                    },
                    minLength: {
                        value: 10,
                    },
                    maxLength: {
                        value: 10,
                    },
                }
            },
            {
                label: 'What\'s the estimated annual payroll for your business?',
                value: '',
                name: 'phone',
                isValid: true,
                palceholder: '',
                component: 'TextInput',
                validationRules: {
                    required: {
                        value: false,
                    },
                    regexPattern: {
                        value: /^\d+$/,
                        errorMessage: 'please enter valid number',
                    },
                    minLength: {
                        value: 10,
                    },
                    maxLength: {
                        value: 10,
                    },
                }
            },
            {
                label: 'How many employees do you have?',
                value: '',
                name: 'phone',
                isValid: true,
                palceholder: '',
                component: 'TextInput',
                toolTip: 'Include yourself and employees you have working under a W-2',
                validationRules: {
                    required: {
                        value: false,
                    },
                    regexPattern: {
                        value: /^\d+$/,
                        errorMessage: 'please enter valid number',
                    },
                    minLength: {
                        value: 10,
                    },
                    maxLength: {
                        value: 10,
                    },
                }
            }
        ],
        buttons: [
            {
                variant: 'outlined',
                label: 'Back',
                color: 'secondary',
                className: 'space-3 space-left-0',
                onClickHandler: "handleBack",
            },
            {
                label: 'Submit',
                color: 'primary',
                className: 'space-3 space-right-0',
                onClickHandler: "handleSubmit",
            }
            
        ]
    }
]
}