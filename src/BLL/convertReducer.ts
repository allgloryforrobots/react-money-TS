//Types
import {
    convertReducerActionsTypes,
    SET_CASH,
    SET_CURRENCY,
    SET_CURRENCY_2,
    SET_DAILY_JSON,
    SET_LATEST_JSON,
    SET_LOAD_END,
    SET_LOAD_ERROR,
    SET_REVERSED_CURRENCIES,
    setCashType,
    setCurrency2Type,
    setCurrencyType,
    setDailyJsonType,
    setLatestJsonType,
    setLoadEndType,
    setLoadErrorType,
    setReversedCurrenciesType
} from "./convertReducerTypes"

import {Dispatch} from "react"
import {DailyJsonElType} from "../UI/ConvertFormBundle/ConvertForm"
// API
import {DAL} from "../DAL/DAL"
// Helpers
import {reculcDailyJson} from "./convertReducerHelpers"
// Функция конвертирующая валюту
const fx = require("money")

// Reducer
export type InitialStateType = {
    cash: number,
    currency: string,
    currency2: string,
    resultCash: number,
    isLoadingData: boolean,
    loadError: string | null
    LatestJson: Object,
    DailyJson: Array<DailyJsonElType> // []Object
}
//export type InitialStateType = typeof initialState // сокращенная запись

let initialState: InitialStateType  = {
    cash: 0,
    currency: 'RUB',
    currency2: 'RUB',
    resultCash: 0 ,
    isLoadingData: false,
    loadError: null,
    LatestJson: {
        date: ''
    },
    DailyJson: [
    ] as Array<DailyJsonElType>
}


const convertReducer = (state = initialState, action: convertReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_CASH:
            return {
                ...state,
                cash: action.newCash,
                resultCash: fx(action.newCash).convert({ from: state.currency, to: state.currency2 })
            }
        case SET_CURRENCY:

            return {
                ...state,
                currency: action.newCurrency,
                resultCash: fx(state.cash).convert({ from: action.newCurrency, to: state.currency2 })
            }
        case SET_CURRENCY_2:
            return {
                ...state,
                currency2: action.newCurrency2,
                resultCash: fx(state.cash).convert({ from: state.currency, to: action.newCurrency2 })
            }
        case SET_REVERSED_CURRENCIES:
            return {
                ...state,
                currency: action.currency2,
                currency2: action.currency,
                resultCash: fx(state.cash).convert({ from: action.currency2, to: action.currency })
            }
        case SET_LOAD_END:
            return {
                ...state,
                isLoadingData: true,
            }
        case SET_DAILY_JSON:
            return {
                ...state,
                DailyJson: action.DailyJson,
            }
        case SET_LATEST_JSON:
            return {
                ...state,
                LatestJson: action.LatestJson,
            }
        case SET_LOAD_ERROR:
            return {
                ...state,
                loadError: action.error.toString()
            }
        default:
            return state
    }
}

//Action Creators
export const setCash = (newCash: number): setCashType =>
    ({type: SET_CASH, newCash})

export const setCurrency = (newCurrency: string): setCurrencyType =>
    ({type: SET_CURRENCY, newCurrency})

export const setCurrency2 = (newCurrency2: string): setCurrency2Type =>
    ({type: SET_CURRENCY_2, newCurrency2})

export const setReversedCurrencies = (currency: string, currency2: string): setReversedCurrenciesType =>
    ({type: SET_REVERSED_CURRENCIES, currency, currency2} )

export const setDailyJson = (DailyJson: Array<DailyJsonElType>): setDailyJsonType =>
    ({type: SET_DAILY_JSON, DailyJson})

export const setLatestJson = (LatestJson: Object): setLatestJsonType =>
    ({type: SET_LATEST_JSON, LatestJson})

export const setLoadEnd = ():setLoadEndType =>
    ({type: SET_LOAD_END})

export const setLoadError = (error: string): setLoadErrorType =>
    ({type: SET_LOAD_ERROR, error})


//ThunkCreators
export const InitAppThunkCreator = () => (dispatch: Dispatch<convertReducerActionsTypes>) => {

    Promise.all([DAL.getDailyJson(), DAL.getLatestJson()])
        .then( (response) => {
            // 1 вызов
            const DailyJson: Array<DailyJsonElType>  = reculcDailyJson(Object.values(response[0].data.Valute))
            dispatch(setDailyJson(DailyJson))
            // 2 вызов
            type LatestJsonType = {
                base: string
                rates: Object
            }
            const LatestJson: LatestJsonType = response[1].data
            dispatch(setLatestJson(LatestJson))
            dispatch(setLoadEnd())
            fx.base = LatestJson.base
            fx.rates = LatestJson.rates
        })
        .catch((error: any) => {
            setLoadError(error.toString())
        })
}



export default convertReducer


