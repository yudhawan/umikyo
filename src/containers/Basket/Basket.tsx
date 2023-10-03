import React, { useEffect, useCallback } from 'react'
import { setStateAction } from '../../types'
import Icon from '../../components/Icon/Icon'
import CartIcon from '../../icons/cart.svg'
import CheckIcon from '../../icons/circleCheck.svg'
import TrashIcon from '../../icons/trash.svg'
import XIcon from '../../icons/x.svg'
import styles from './Basket.module.scss'
function Basket({ setAction, action }: any) {
    const escFunction = useCallback((event: any) => {
        if (event.key === "Escape") setAction(false)
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => document.removeEventListener("keydown", escFunction, false);
    }, [escFunction]);
    return (
        <div className={styles.main}>
            <div className={styles.container} onClick={() => setAction(!action)}>
                <div className={styles.headerCart}>
                    <span>Keranjangmu</span>
                    <Icon name={CartIcon} className={styles.icon} />
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.productsContainer}>
                        <p>title</p>
                        <div className={styles.editQuantity}>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <span className={styles.remove}><Icon name={TrashIcon} className={styles.xIcon} /></span>
                    </div>
                </div>
                <div className={styles.totalContainer}>
                    <span>Total: </span>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonClose} onClick={() => setAction(!false)}>
                        <Icon name={XIcon} className={styles.iconClose} />
                        <span>Close</span>
                    </button>
                    <button className={styles.buttonCheckout} onClick={() => setAction(!false)}>
                        <Icon name={CheckIcon} className={styles.iconClose} />
                        <span>Checkout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Basket