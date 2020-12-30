// Сортируем элементы массива MoneyData, чтобы часто исп. валюты оказались наверху

type serverDailyJsonElType = {
    Name: string
    CharCode: string
}

export const reculcDailyJson = (serverDailyJson: Array<serverDailyJsonElType>) => {

    const addElArr = serverDailyJson.filter(el =>
        el.CharCode === 'CNY' ||
        el.CharCode === 'GBP' ||
        el.CharCode === 'EUR' ||
        el.CharCode === 'USD'
    )
    serverDailyJson.forEach((el, index) => {
        if (el.CharCode === 'CNY' ||
            el.CharCode === 'GBP' ||
            el.CharCode === 'EUR' ||
            el.CharCode === 'USD') {
            serverDailyJson.splice(index, 1)
        }
    })
    serverDailyJson.unshift(...addElArr)
    return serverDailyJson
}

