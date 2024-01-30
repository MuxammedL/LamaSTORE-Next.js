import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </header>
  );
};

export default Navbar;
