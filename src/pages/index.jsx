import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";

const handleClick = useCallback((e) => {
	console.log(e.target.href);
	e.preventDefault();
},[]);
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<a href="./about" onClick={handleClick}>
				ボタン
			</a>
			<Main page="index" />
			<Footer />
		</div>
	);
}
