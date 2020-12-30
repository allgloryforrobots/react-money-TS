import {ServerOkContainer} from "../ServerOkContainer/ServerOkContainer";
import {ConvertFormContainer} from "../ConvertFormBundle/ConvertFormContainer";
import {CalcResultsContainer} from "../CalcResultsContainer/CalcResultsContainer";
import {FirstLoad} from "../loaders/FirstLoad";
import {LoadErrorContainer} from "../loaders/LoadErrorContainer";
import React from "react";


type LayoutPropTypes = {
    isLoadingData: boolean
}

export const Layout: React.FC<LayoutPropTypes> = ({isLoadingData}) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            padding: "20px",
            height: "100%"
        }}>
            {
                isLoadingData
                    ? <div>
                        <ServerOkContainer/>
                        <ConvertFormContainer/>
                        <CalcResultsContainer/>
                    </div>
                    : <FirstLoad/>
            }
            <LoadErrorContainer/>
        </div>
    )
}