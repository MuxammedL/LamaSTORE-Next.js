import styles from './footer.module.css'
const Footer = () => {
    return ( <div>
        <div className={styles.container}>
            <div className={styles.logo}>
                MuxammedL
            </div>
            <div className={styles.text}>All rights reserved.</div>
        </div>
    </div> );
}
 
export default Footer;