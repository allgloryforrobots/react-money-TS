import React from 'react'
import {Alert} from "antd"


//UI
type PropTypes = {
    LatestJson: {
        date: string
    }
}


export const ServerOk: React.FC<PropTypes> = ({ LatestJson }) => (
    <Alert
        message={`Получены курсы валют на ${LatestJson.date}`}
        type="success"
        style={{marginBottom: "50px"}}
        showIcon />

)


