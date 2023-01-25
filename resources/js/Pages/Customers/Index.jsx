import React, { useState } from "react";
import DatatableComponent from "@/Components/DataTable/DatatableComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import Card from "@/Components/UI/Card";
import InputSearch from "@/Components/Inputs/InputSearch";
import { Button } from "antd";
import CreateCustomer from "@/Pages/Customers/Create";
import { CodepenCircleFilled, EditOutlined, EyeFilled } from "@ant-design/icons";
import DeleteButton from "@/Components/DeleteButton";

function Index({ customers = [] }) {
    const columns = [
        {
            name: "S.no",
            selector: (row) => row.sNo,
            width: "100px"
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
            sortField: "name"
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
            sortField: "email"
        },
        {
            name: "Phone",
            selector: (row) => row.phone,
            sortable: true,
            sortField: "phone"
        },
        {
            name: "Actions",
            selector: (row) => <TableAction record={row}/>,
        }
    ];
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        return setIsModalVisible(!isModalVisible);
    };
    return (
        <div>
            <AuthenticatedLayout>
                <Head title="Customers" />
                <div className="py-12">
                    <Card>
                        <div className="flex justify-between">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                Customers
                            </h2>
                            <div className={"flex align-center"}>
                                <InputSearch />
                                <Button
                                    onClick={toggleModal}
                                    className={"mx-2"}
                                    type={"primary"}
                                >
                                    Create
                                </Button>
                            </div>
                        </div>
                        <DatatableComponent
                            data={customers}
                            columns={columns}
                        />
                    </Card>
                </div>
            </AuthenticatedLayout>
            {isModalVisible && (
                <CreateCustomer
                    isModalVisible={isModalVisible}
                    closeModal={toggleModal}
                />
            )}
        </div>
    );
}
const TableAction = ({ record }) =>{
    const [isModalVisible,setIsModalVisible] = useState(false);
    const toggleModal = () => {
        return setIsModalVisible(!isModalVisible);
    }
    return (
        <div className={"flex items-center"}>
            <Link href={"#"}>
                <EyeFilled className={"text-green-600"}/>
            </Link>
            <Button type={"link"} onClick={toggleModal}><EditOutlined className={"text-blue-600"}/></Button>
            <DeleteButton endpoint={route('customers.delete',record.id)} name={"Customer"}/>
            {
                isModalVisible && (
                    <CreateCustomer
                        isModalVisible={isModalVisible}
                        closeModal={toggleModal}
                        customer={record}
                    />
                )
            }
        </div>
    )
}
export default Index;
