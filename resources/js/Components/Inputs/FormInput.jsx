import React from "react";
import { Form, Input } from "antd";
import clsx from "clsx";
import { requiredRule } from "@/Constants/AntdValidationRules";

const FormInput = ({
    name,
    label,
    display = "block",
    rules = [requiredRule],
    disabled = false,
    inputClass = "",
    ...rest
}) => {
    return (
        <Form.Item
            name={name}
            style={{ display: display }}
            rules={[...rules]}
            label={label}
            {...rest}
        >
            <Input
                className={clsx(inputClass)}
                disabled={disabled}
            />
        </Form.Item>
    );
};

export default FormInput;
