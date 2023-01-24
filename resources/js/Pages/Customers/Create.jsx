import React from "react";
import { Form, Modal } from "antd";
import FormInput from "@/Components/Inputs/FormInput";
import InputTextArea from "@/Components/Inputs/InputTextArea";
import { requiredRule } from "@/Constants/AntdValidationRules";
import ModalFooterButtons from "@/Components/ModalFooterButtons";
import { Inertia } from "@inertiajs/inertia";
import { formatErrors } from "@/Constants/globals";
import InputRadio from "@/Components/Inputs/InputRadio";

function CreateCustomer({ isModalVisible, closeModal }) {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        Inertia.post(route("customers.store"), values, {
            onSuccess: () => {
                closeModal();
            },
            onError: (errors) => {
                form.setFields(formatErrors(errors));
            }
        });
    };
    return (
        <Modal
            title={"Create Customer"}
            width={"800px"}
            open={isModalVisible}
            onCancel={closeModal}
            destroyOnClose
            footer={null}
        >
            <Form layout={"vertical"} onFinish={onFinish} form={form}>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-x-4"}>
                    <FormInput
                        rules={[requiredRule]}
                        name={"name"}
                        label={"Customer Name"}
                    />
                    <FormInput
                        rules={[requiredRule]}
                        name={"email"}
                        label={"Email"}
                    />
                    <FormInput
                        rules={[requiredRule]}
                        name={"phone"}
                        label={"Phone Number"}
                    />
                    <InputRadio
                        rules={[requiredRule]}
                        name={"gender"}
                        label={"Gender"}
                        options={[
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" }
                        ]}
                    />
                    <InputTextArea
                        rules={[requiredRule]}
                        className={"col-span-2"}
                        name={"address"}
                        label={"Address"}
                    />
                    <FormInput name={"city"} label={"City"} />
                    <FormInput name={"state"} label={"state"} />
                    <FormInput name={"zip"} label={"zip"} />
                    <FormInput name={"country"} label={"country"} />
                    <InputTextArea
                        className={"col-span-2"}
                        name={"notes"}
                        label={"Notes"}
                    />
                </div>
                <ModalFooterButtons />
            </Form>
        </Modal>
    );
}

export default CreateCustomer;
