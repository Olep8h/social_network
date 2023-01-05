import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import styles from "../../Users/Users.module.css";

const Preloader = (props) => {
    return <img src={preloader}
                alt="preloader"
                className={styles.preloader}/>
}

export default Preloader;