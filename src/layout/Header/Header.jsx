import React from 'react'
import styles from './Header.module.scss'

function Header(props) {

    
  return (
    <header className={styles.header}>
        <h1>{props.title}</h1>
    </header>
  )
}

export default Header