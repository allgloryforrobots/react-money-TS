import React from "react";
import {Alert} from "antd";

type PropTypes = {
    loadError: string | null
}

//UI
export const LoadError: React.FC<PropTypes> = ({ loadError}) => (

    loadError
        ? <Alert message={loadError} type="error" showIcon/>
        : null
)