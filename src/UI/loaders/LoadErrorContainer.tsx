import {compose} from "redux"
import {connect} from "react-redux"
import {LoadError} from "./LoadError"
import {AppStateType} from "../../BLL/redux-store"
import { getLoadError } from '../../BLL/selectors'

type mapStateToPropsType = {
    loadError: string | null
}

//Container
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return ({
        loadError: getLoadError(state),
    })
}

export const LoadErrorContainer = compose(
    connect<mapStateToPropsType, {}, {}, AppStateType>(mapStateToProps)
)(LoadError)

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
