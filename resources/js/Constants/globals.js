// globals enums

export const formatErrors = (errors) => {
    return Object.keys(errors).map((k) => {
        return {
            name: k,
            errors: [errors[k]],
            validateStatus: "error"
        };
    });
};
export const createBlob = (file) => {
    return URL.createObjectURL(file);
};
