import logo from "../assets/logo-bg.png"
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="index.html" className={styles.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Jakaria Sami</h3>
            </a>
          </li>
        </ul>
        <div className={styles.account}>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <a href="signup.html">Signup</a>
        </div>
      </nav>
    </>
  )
}
