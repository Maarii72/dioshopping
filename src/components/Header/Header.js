import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core/';
import  styles  from './styles.module.scss';
import Cart from '../Cart';

const Header = () => {
    return(
        <header className={styles.headerContainer1}>
            <div className={styles.headerContainer}>
            <div className={styles.headerLogo}>
                <img src="/images/caneca.png" alt=""/>
                <h2>Dio Shopping</h2>
            </div>
            <nav className={styles.headerContent}>
                <Link to="/">
                    <Button className={styles.headerButton}>Home</Button>
                </Link>
                <Link to="/contato">
                    <Button className={styles.headerButton} >Contato</Button>
                </Link>
                <Cart />
            </nav>
            </div>
        </header>
    )
}

export default Header;
