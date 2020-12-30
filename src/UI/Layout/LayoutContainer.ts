import 'antd/dist/antd.css'
import {connect} from "react-redux"
import {compose} from "redux"
import {Layout} from "./Layout"
import {getIsLoadingData} from "../../BLL/selectors"
import {AppStateType} from "../../BLL/redux-store";

type mapStateToPropsType = {
    isLoadingData: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return ({
        isLoadingData: getIsLoadingData(state) //state.convertPage.isLoadingData,
    })
}

export const LayoutContainer = compose(
    connect<mapStateToPropsType, {}, {}, AppStateType>(mapStateToProps)
)(Layout)









