import {compose} from "redux"
import {connect} from "react-redux"
import {getCurrency2, getResultCash} from "../../BLL/selectors"
import {CalcResults} from "./CalcResults"
import {AppStateType} from "../../BLL/redux-store"

type mapStateToPropsType = {
    resultCash: number, //state.convertPage.resultCash
    currency2: string //state.convertPage.currency2
}

//Container = данные из BLL
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return ({
        resultCash: getResultCash(state), //state.convertPage.resultCash
        currency2: getCurrency2(state)//state.convertPage.currency2
    })
}

export const CalcResultsContainer = compose(
    connect<mapStateToPropsType, {}, {}, AppStateType>(mapStateToProps)
)(CalcResults)



