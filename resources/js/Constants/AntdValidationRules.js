export const requiredRule = {
    required: true,
    message: "Field is Required",
};
export const passwordRule = {
    // pattern: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
    pattern: /^[A-Za-z]{8}$/,
    message: "Minimum eight characters, at least one letter and one number:",
};
export const minimumRule = {
    pattern: /^[+]?\d+([.]\d+)?$/,
    message: "Field value can't be less than zero",
};

export const isRequired = (message) => {
    return {
        required: true,
        message,
    };
};
export const isNumber = [
    {
        required: true,
        message: "Field is Required",
    },
    ({ _ }) => ({
        validator(_, value) {
            if (value && isNaN(value)) {
                return Promise.reject(new Error("Value should be a number"));
            }
            return Promise.resolve();
        },
    }),
];
