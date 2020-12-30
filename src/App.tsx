import {connect, Provider} from "react-redux";
import store from "./BLL/redux-store";
import React, {Component} from 'react'
import {LayoutContainer} from "./UI/Layout/LayoutContainer";
import {compose} from "redux";
import {InitAppThunkCreator} from "./BLL/convertReducer";

type PropTypes = {
    InitAppThunkCreator: () => void
}

class AppDAL extends Component<PropTypes> {

    componentDidMount() {
        // Загружаем данные с сервера
        this.props.InitAppThunkCreator()
    }

    render() {
        return (
            <div>
                <LayoutContainer/>
            </div>
        )
    }
}

// Запрос к BLL
const AppContainer = compose(
    connect(null, {InitAppThunkCreator})
)(AppDAL)

// Базовая точка
export const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}