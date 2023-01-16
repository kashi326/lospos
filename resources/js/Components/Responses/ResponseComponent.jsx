import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Alert } from "antd";
import { useTranslation } from "react-i18next";

function ResponseComponent({ time = 5000 }) {
    const { error_message } = usePage().props?.errors;
    const { success } = usePage().props;
    const [isMessageShown, setIsMessageShown] = useState(false);

    const { t } = useTranslation();

    Inertia.on("finish", () => {
        if (success || error_message) {
            setIsMessageShown(true);
            setTimeout(() => {
                setIsMessageShown(false);
            }, time);
        }
    });

    return (
        <div className={"py-1"}>
            {isMessageShown && error_message?.length > 0 && (
                <Alert type={"error"} message={t(error_message)} role="alert" />
            )}
            {isMessageShown && success?.length > 0 && (
                <Alert type={"success"} message={t(success)} role="alert" />
            )}
        </div>
    );
}

export default ResponseComponent;
