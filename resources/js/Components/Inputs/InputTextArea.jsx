import React from "react";
import { Input, Form } from "antd";

const { TextArea } = Input;

const InputTextArea = ({
    name = "",
    label = "",
    rules = [],
    defaultValue = "",
    formItemStyle = {},
    ...rest
}) => {
    return (
        <Form.Item
            style={formItemStyle}
            name={name}
            label={label}
            rules={rules}
            initialValue={defaultValue}
            {...rest}
        >
            <TextArea />
        </Form.Item>
    );
};

export default InputTextArea;
