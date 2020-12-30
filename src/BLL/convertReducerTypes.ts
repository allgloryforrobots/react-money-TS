// Actions
import {DailyJsonElType} from "../UI/ConvertFormBundle/ConvertForm";

export const SET_CASH = 'convertReducer/SET_CASH'
export const SET_CURRENCY = 'convertReducer/SET_CURRENCY'
export const SET_CURRENCY_2 = 'convertReducer/SET_CURRENCY_2'
export const SET_REVERSED_CURRENCIES = 'convertReducer/SET_REVERSED_CURRENCIES'
export const SET_LOAD_END = 'convertReducer/SET_LOAD_END'
export const SET_LOAD_ERROR = 'convertReducer/SET_LOAD_ERROR'
export const SET_DAILY_JSON = 'convertReducer/SET_DAILY_JSON'
export const SET_LATEST_JSON = 'convertReducer/SET_LATEST_JSON'

//Action Creators Types
export type setCashType = {
    type: typeof SET_CASH
    newCash: number
}
export type setCurrencyType = {
    type: typeof SET_CURRENCY
    newCurrency: string
}
export type setCurrency2Type = {
    type: typeof SET_CURRENCY_2
    newCurrency2: string
}
export type setReversedCurrenciesType = {
    type: typeof SET_REVERSED_CURRENCIES
    currency: string
    currency2: string
}
export type setDailyJsonType = {
    type: typeof SET_DAILY_JSON
    DailyJson: Array<DailyJsonElType>
}
export type setLatestJsonType = {
    type: typeof SET_LATEST_JSON
    LatestJson: Object
}
export type setLoadEndType = {
    type: typeof SET_LOAD_END
}
export type setLoadErrorType = {
    type: typeof SET_LOAD_ERROR
    error: string
}

// ActionsTypes
export type convertReducerActionsTypes =
    setCashType |
    setCurrency2Type |
    setCurrencyType |
    setDailyJsonType |
    setLatestJsonType |
    setLoadEndType |
    setLoadErrorType |
    setReversedCurrenciesType