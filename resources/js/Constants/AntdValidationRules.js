export const requiredRule = {
    required: true
};
export const passwordRule = {
    pattern: /^(?=.*[A-Za-z])(?=.*d)[A-Za-z]{8,}$/,
    message: "Minimum eight characters, at least one letter and one number:"
};
export const minimumRule = {
    pattern: /^[+]?\d+([.]\d+)?$/,
    message: "Field value can't be less than zero"
};

export const isNumber = [
    {
        required: true,
        message: "Field is Required"
    },
    () => ({
        validator(_, value) {
            if (value && isNaN(value)) {
                return Promise.reject(new Error("Value should be a number"));
            }
            return Promise.resolve();
        }
    })
];
