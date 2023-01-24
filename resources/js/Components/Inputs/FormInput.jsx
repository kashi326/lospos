import React from "react";
import { Form, Input } from "antd";
import clsx from "clsx";

const FormInput = ({
    name,
    label,
    rules = [],
    disabled = false,
    inputClass = "",
    ...rest
}) => {
    return (
        <Form.Item name={name} rules={rules} label={label} {...rest}>
            <Input className={clsx(inputClass)} disabled={disabled} />
        </Form.Item>
    );
};

export default FormInput;
