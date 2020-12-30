import {compose} from "redux"
import {setCash, setCurrency, setCurrency2, setReversedCurrencies} from "../../BLL/convertReducer"
import {connect} from "react-redux"
import {ConvertForm, DailyJsonElType} from "./ConvertForm"
import {getCash, getCurrency, getCurrency2, getDailyJson} from "../../BLL/selectors"
import { AppStateType } from "../../BLL/redux-store"


type mapStateToPropsType = {
    cash: number
    currency: string
    currency2: string
    DailyJson: Array<DailyJsonElType>
}

type mapDispatchToPropsType = {
    setCash: (newCah: number) => Object
    setCurrency: (newCurrency: string) => Object
    setCurrency2: (newCurrency2: string) => Object
    setReversedCurrencies: (newCurrency: string, newCurrency2: string) => Object
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return ({
        cash: getCash(state), //state.convertPage.cash
        currency: getCurrency(state), //state.convertPage.currency
        currency2: getCurrency2(state), //state.convertPage.currency2
        DailyJson: getDailyJson(state), //state.convertPage.DailyJson,
    })
}

export const ConvertFormContainer =  compose(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setCash, setCurrency, setCurrency2, setReversedCurrencies})
)(ConvertForm)

