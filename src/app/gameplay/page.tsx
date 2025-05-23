import Head from "next/head";
import Navbar from "../components/navBar";
import Quiz from "../components/quiz";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Nome da Fase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <Quiz />
      </main>
    </div>
  );
}
