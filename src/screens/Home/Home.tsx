import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.main}>
      <section className={styles.banner}>
        <h1>Politician Report Card</h1>

        <p>
          Welcome to the politician report card! This is an app that allows you
          to get detailed history of various politicians.
        </p>
        <p>
          At the moment, we only support House members in congress. But you
          can see if a politician was in the house, their terms and how they voted on various bills.
        </p>
        <p>
          We add new politicians every day, but for the ones we do have our information comes DIRECTLY from the Congress.gov records.
        </p>
      </section>

      <section className={styles.samples}>
        <p>To get a sample of what we offer for politicians or for specific bills. Click one of the buttons below!</p>
        <div>
          <Link to="/sample-politician" className={styles.button} aria-label="Sample-Politician">
            Sample Politician
          </Link>
          <Link to="/sample-bill" className={styles.button} aria-label="Sample-Bill">
            Sample Bill
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
