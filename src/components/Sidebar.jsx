import AppNav from './AppNav'
import Logo from './Logo'
import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <p>List of cites</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; copyright {new Date().getFullYear()} by WorldWise Inc.
                </p>
            </footer>
        </div>
    )
}

export default Sidebar
