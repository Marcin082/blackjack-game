import React from 'react';
import styles from './BlackJack.module.scss'

type Props = {
    blackJack:string
};
const BlackJack = (props:Props) => {
    return (
        <div className={styles.blackJack} style={{
            transform: props.blackJack==='player'?'translate(250px,-300px)':'translate(250px,-700px)'
        }}>
            BLACKJACK!
        </div>
    );
};

export default BlackJack;