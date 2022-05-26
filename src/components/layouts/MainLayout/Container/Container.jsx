import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from './Container.module.scss'

export default function Container({ children }) {

    return (
        <div className={styles.container}>
            {children || <Outlet />}
        </div>
    )
}
