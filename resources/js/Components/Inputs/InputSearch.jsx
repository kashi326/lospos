import { Input } from "antd";
import SearchIcon from "@mui/icons-material/Search";

import React from "react";
import { Inertia } from "@inertiajs/inertia";
// render input with prefix icon
const InputSearch = ({ placeholder = "", endpoint = "" }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const handleSearch = (e) => {
        let query = {};
        for (let param of urlParams.entries()) {
            query[param[0]] = param[1];
        }

        delete query.search;

        if (e.target.value) {
            query.search = e.target.value;
        } else {
            // this is to remove search from query parameters in order to prevent from sending empty
            query.search = undefined;
        }

        Inertia.get(
            endpoint,
            {
                ...query
            },
            {
                preserveState: true
            }
        );
    };

    return (
        <Input
            placeholder={"Search"}
            className="primary-search"
            prefix={<SearchIcon className="primary-input-search" />}
            onChange={handleSearch}
            defaultValue={urlParams.get("search") ?? ""}
        />
    );
};

export default InputSearch;
