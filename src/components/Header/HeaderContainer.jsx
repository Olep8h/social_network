import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData, toggleIsLoading } from '../../redux/authentication_reducer';

const HeaderContainer = ({ getAuthUserData, toggleIsLoading, ...props }) => {
    useEffect(() => {
        getAuthUserData();
    }, []);

    return <Header {...props} />;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData, toggleIsLoading })(HeaderContainer);
