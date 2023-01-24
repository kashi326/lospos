import { Form, Switch } from "antd";
import React from "react";
import proptypes from "prop-types";
import clsx from "clsx";

const InputSwitch = ({
    name,
    label,
    defaultChecked = false,
    formItemStyle = {},
    handler = () => {},
    className = "",
    prefix = null,
    suffix = null
}) => {
    return (
        <>
            <label htmlFor="checkbox" className="d-block">
                {label}
            </label>
            <div className="w-max-content d-flex align-items-center">
                {prefix && prefix}
                <Form.Item
                    style={formItemStyle}
                    name={name}
                    valuePropName="checked"
                >
                    <Switch
                        id="checkbox"
                        defaultChecked={defaultChecked}
                        onChange={handler}
                        className={clsx(className)}
                    />
                </Form.Item>
                {suffix && suffix}
            </div>
        </>
    );
};

export default InputSwitch;

InputSwitch.proptTypes = {
    name: proptypes.string,
    label: proptypes.string,
    defaultChecked: proptypes.bool
};
