import {Form, Input, Select} from 'antd'
import SyncOutlined from "@ant-design/icons/lib/icons/SyncOutlined"
import React from "react"
const {Option} = Select

export type DailyJsonElType = {
    CharCode: string
    Name: string
}
type ConvertFormPropTypes = {
    DailyJson: Array<DailyJsonElType>
    cash: number
    currency: string
    currency2: string
    setCash: (newNumber: number) => void
    setCurrency: (newCurrency: string) => void
    setCurrency2: (newCurrency2: string) => void
    setReversedCurrencies: (newCurrency: string, newCurrency2: string, ) => void
}

export const ConvertForm: React.FC<ConvertFormPropTypes> =
    ({ DailyJson, cash, currency, currency2,
    setCash, setCurrency, setCurrency2, setReversedCurrencies}) => {


    // Валидация > ввод только чисел + сразу записываем значение  => запись в стейт
    const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNumber: number = parseInt(e.target.value || '0', 10)
        if (Number.isNaN(newNumber)) {
            return
        }
        setCash(newNumber)
    }

    return (
        <Form
            name="customized_form_controls"
            layout="vertical"
        >
                    <Input
                        type="tel"
                        value={cash}
                        style={{
                            width: 120,
                            margin: "5px"
                        }}
                        onChange={(e) => onNumberChange(e)}
                    />

                    <Select
                        value={currency}
                        style={{
                            width: 270,
                            margin: "5px"
                        }}
                        // Здесь value от API ant Design = не путай с тем же в селекте :)
                        onChange={(value) => setCurrency(value)}
                    >
                        <Option key='RUB'
                                value='RUB'><strong>RUS&nbsp;</strong> Российский рубль</Option>
                        {
                            DailyJson.map((el, index) => {
                                return (
                                    <Option key={Math.random() + 'currency'}
                                            value={DailyJson[index].CharCode}>
                                        <strong>{DailyJson[index].CharCode}&nbsp;</strong> {DailyJson[index].Name}
                                    </Option>
                                )
                            })
                        }
                    </Select>

                    <SyncOutlined onClick={() => setReversedCurrencies(currency, currency2)}
                                  style={{color: "yellowgreen", margin: "5px", fontSize: "1rem"}}/>

                    <Select
                        value={currency2}
                        style={{
                            width: 270,
                            margin: "5px"
                        }}
                        onChange={(value) => setCurrency2(value)}
                    >
                        <Option key='RUB'
                                value='RUB'><strong>RUS&nbsp;</strong> Российский рубль</Option>
                        {
                            DailyJson.map((el, index) => {
                                return (
                                    <Option key={Math.random() + 'currency2'}
                                            value={DailyJson[index].CharCode}>
                                        <strong>{DailyJson[index].CharCode}&nbsp;</strong> {DailyJson[index].Name}
                                    </Option>
                                )
                            })
                        }
                    </Select>

        </Form>
    )
}


