import styles from './auth.module.css';
import MetaMaskAuth from "./metamask-auth";

function Auth() {
    return (
        <div className={styles.auth}>
            <div className={styles.logoContainer}>
                {/* <img src={"svg/metamask.svg"} alt='' height={30} /> */}
            </div>
            <MetaMaskAuth />
        </div>
    );
}

export default Auth;