import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setUserData, toggleIsLoading} from "../../redux/authentication_reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {

withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            });

        }


    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, {setUserData, toggleIsLoading})(HeaderContainer);