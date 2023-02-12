const REQUIRED_FIELD_ERROR = 'Field is required';

export const validateRequiredField = value => {
    if (value) return undefined;
    return REQUIRED_FIELD_ERROR;
};

export const maxlengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}



