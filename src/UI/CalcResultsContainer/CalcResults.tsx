//UI
import {Statistic} from "antd";
import React from "react";


type PropTypes = {
    resultCash: number
    currency2: string
}

export const CalcResults: React.FC<PropTypes> = ({resultCash, currency2}) => (
    <Statistic title="Результат"
               style={{textAlign: "center"}}
               value={`${resultCash} ${currency2}`}/>
)