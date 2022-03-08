import { Fragment } from "react";

import classes from './Header.module.css';
import mealsImage from '../../assets/img/meals.jpg';

import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table of meals!" />
        </div>
    </Fragment>
}

export default Header;