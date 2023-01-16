import React from "react";
import DataTable from "react-data-table-component";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { PropTypes } from "prop-types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import { useTranslation } from "react-i18next";
const customStyles = {
    headCells: {
        style: {
            color: "#686874",
            fontSize: "14px",
            paddingLeft: "24px",
        },
    },

    cells: {
        style: {
            fontSize: "14px",
            paddingLeft: "24px",
        },
    },
};
const DatatableComponent = ({
    data,
    columns,
    pagination = true,
    expandableRows,
    ExpandableRowsComponent,
    ...rest
}) => {
    let { total, currentPage, perPage } = usePage().props;
    let paginationConfig = {};
    const fetchData = (page, newPerPage) => {
        Inertia.get(
            "",
            {
                page: page ?? currentPage,
                perPage: newPerPage ?? perPage,
            },
            {
                preserveState: true,
            }
        );
    };
    const handlePageChange = (page) => {
        fetchData(page);
    };
    const handlePerRowsChange = async (newPerPage, page) => {
        fetchData(page, newPerPage);
    };
    if (total && currentPage && perPage) {
        paginationConfig = {
            paginationServer: true,
            paginationTotalRows: total,
            onChangeRowsPerPage: handlePerRowsChange,
            onChangePage: handlePageChange,
            paginationDefaultPage: currentPage,
            paginationPerPage: perPage,
        };
    }
    const { t } = useTranslation();
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination={pagination}
            customStyles={customStyles}
            keyField="id"
            {...paginationConfig}
            {...rest}
            expandableRows={expandableRows}
            expandableRowsComponent={ExpandableRowsComponent}
            expandableIcon={{
                collapsed: <ArrowDropUp />,
                expanded: <ArrowDropDownIcon />,
            }}
            noDataComponent={t("There are no records to display")}
        />
    );
};
export default DatatableComponent;

DatatableComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    pagination: PropTypes.bool,
    expandableRows: PropTypes.bool,
    ExpandableRowsComponent: PropTypes.func,
};
