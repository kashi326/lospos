import React from "react";
import { Select, Form } from "antd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { requiredRule } from "@/Constants/AntdValidationRules";

const { Option } = Select;

const FormSelect = ({
    options,
    label,
    name,
    placeholder = "Select",
    handler = null,
    rules = [requiredRule],
    mode = "",
    ...rest
}) => {
    const handleOnChange = (value) => {
        if (handler) {
            handler(value);
        }
    };
    return (
        <Form.Item label={label} name={name} rules={rules} {...rest}>
            <Select
                className="select-option-primary"
                placeholder={placeholder}
                onChange={handleOnChange}
                dropdownMatchSelectWidth={false}
                suffixIcon={
                    <ExpandMoreIcon className="select-option-primary-icon" />
                }
                mode={mode}
            >
                {options?.map((option, i) => (
                    <Option key={i} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default FormSelect;
