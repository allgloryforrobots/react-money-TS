import {AppStateType} from "./redux-store";

export const getResultCash = (state: AppStateType) => {
    return state.convertPage.resultCash
}
export const getCurrency = (state: AppStateType) => {
    return state.convertPage.currency
}
export const getCurrency2 = (state: AppStateType) => {
    return state.convertPage.currency2
}
export const getCash = (state: AppStateType) => {
    return state.convertPage.cash
}

export const getIsLoadingData = (state: AppStateType) => {
    return state.convertPage.isLoadingData
}
export const getDailyJson = (state: AppStateType) => {
    return state.convertPage.DailyJson
}

export const getLoadError = (state: AppStateType) => {
    return state.convertPage.loadError
}

