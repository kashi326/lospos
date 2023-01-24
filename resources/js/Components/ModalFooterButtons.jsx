import React from "react";
import { Button } from "antd";

function ModalFooterButtons({ onCancel }) {
    return (
        <div className={"flex justify-end align-center"}>
            <Button onClick={onCancel} className={"mr-2"}>
                Cancel
            </Button>
            <Button type={"primary"} htmlType={"submit"}>
                Save
            </Button>
        </div>
    );
}

export default ModalFooterButtons;
