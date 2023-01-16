import React from "react";
import { Input, Form } from "antd";
import proptype from "prop-types";
import { isRequired } from "@/Constants/AntdValidationRules";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

const InputTextArea = ({
    resize = "none",
    borderRaduis = 4,
    borderColor = "#BFBFBF",
    boxShadow = "none",
    height = 120,
    width = "100%",
    name = "",
    label = "",
    rules = null,
    defaultValue = "",
    formItemStyle = {},
}) => {
    const { t } = useTranslation();
    return (
        <Form.Item
            style={formItemStyle}
            name={name}
            label={label}
            rules={rules ? rules : [isRequired(t(`${label} is required`))]}
        >
            <TextArea
                defaultValue={defaultValue}
                style={{
                    resize,
                    borderRaduis,
                    borderColor,
                    boxShadow,
                    height,
                    width,
                }}
            ></TextArea>
        </Form.Item>
    );
};

export default InputTextArea;

InputTextArea.propType = {
    resize: proptype.string,
    borderRaduis: proptype.number,
    borderColor: proptype.string,
    boxShadow: proptype.string,
    height: proptype.number,
    formItemStyle: proptype.object,
};
