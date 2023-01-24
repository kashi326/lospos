import React from "react";
import { Form, Radio } from "antd";

const InputRadio = ({ name, label, rules = [], options = [], ...rest }) => {
    return (
        <Form.Item name={name} rules={rules} label={label} {...rest}>
            <Radio.Group>
                {options.map((option) => {
                    return (
                        <Radio key={option.value} value={option.value}>
                            {option.label}
                        </Radio>
                    );
                })}
            </Radio.Group>
        </Form.Item>
    );
};

export default InputRadio;
