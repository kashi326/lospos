import React, { useState } from "react";
import DatatableComponent from "@/Components/DataTable/DatatableComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Card from "@/Components/UI/Card";
import InputSearch from "@/Components/Inputs/InputSearch";
import { Button } from "antd";
import CreateCustomer from "@/Pages/Customers/Create";

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

export default Index;
