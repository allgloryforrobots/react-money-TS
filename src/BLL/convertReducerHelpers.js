// Сортируем элементы массива MoneyData, чтобы часто исп. валюты оказались наверху
export const reculcDailyJson = (serverDailyJson) => {

    const sortedDailyJson = [...serverDailyJson]
    const orderElements = [
        {code: 'CNY'},
        {code: 'GBP'},
        {code: 'EUR'},
        {code: 'USD'},
    ]
    orderElements.forEach((item, index) => {
        orderElements[index].data = sortedDailyJson.find(item => item.CharCode === orderElements[index].code)
        orderElements[index].dataIndex = sortedDailyJson.findIndex(item => item.CharCode === orderElements[index].code)
    })
    orderElements.forEach((item, index) => {
        sortedDailyJson.splice(orderElements[index].dataIndex, 1)

    })
    orderElements.forEach((item, index) => {
        sortedDailyJson.unshift(orderElements[index].data)
    })

    return sortedDailyJson
}

