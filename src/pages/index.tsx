import Head from "next/head";
import MealRandom from "@/components/core/mealRandom/MealRandom";
import styles from "./Home.module.scss";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Homepage - Random Dish</title>
        <meta name="description" content="Dish home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.mealRandomContainer}>
        <MealRandom />
      </section>
    </>
  );
}
