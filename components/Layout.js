// components/Layout.js
import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

// Beloow defines a functional component called Layout. It accepts children as a prop, which are the child components that will be passed to the Layout component.
export default function Layout({ children }) {
  return (
    // This element will wrap all the child components passed to the Layout component.
    <div className={styles.container}>
      <Head>
        <title>Star Wars App</title>
      </Head>
      <header className={styles.header}>Star Wars App</header>
      <nav className={styles.nav}>
        <ul>
          <li>
            {/* The word home is rendered as an anchor (a) inside the Link
            component. */}
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* This element will wrap all the child components passed to the Layout
      component, which will be rendered inside this element. */}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
