import React from "react";
import { message, Popconfirm } from "antd";
import { Inertia } from "@inertiajs/inertia";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
function DeleteButton({ name = "", endpoint = "", text = "" }) {
    const handleDelete = () => {
        Inertia.delete(endpoint, {
            preserveState: false,
            onSuccess: () => {
                message.success(`${name} is deleted successfully`);
            },
            onError: (errors) => {
                message.error(errors?.error_message);
            }
        });
    };
    const { t } = useTranslation();
    return (
        <Popconfirm
            title={t(`Are you sure to delete this ${name}?`)}
            onConfirm={handleDelete}
            okText={t("Yes")}
            cancelText={t("No")}
        >
            <span>
                <RemoveCircleIcon className="remove-icon" />
                {text}
            </span>
        </Popconfirm>
    );
}

export default DeleteButton;

DeleteButton.propTypes = {
    name: PropTypes.string,
    endpoint: PropTypes.string,
    text: PropTypes.string
};
