import {compose} from "redux"
import {connect} from "react-redux"
import {AppStateType} from "../../BLL/redux-store";
import {getLatestJson} from "../../BLL/selectors";
import { ServerOk } from './ServerOk';


type mapStateToPropsType = {
    LatestJson: {
        date: string
    }
}

//Container
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return ({
        LatestJson: getLatestJson(state)
    }) as mapStateToPropsType
}

export const ServerOkContainer = compose(
    connect<mapStateToPropsType, {}, {}, AppStateType>(mapStateToProps)
)(ServerOk)
