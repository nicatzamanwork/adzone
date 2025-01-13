import Head from "next/head";
import Header from "../app/components/Header";
import Locations from "../app/components/Locations";
import Services from "../app/components/Services";
import Contact from "../app/components/Contact";
import About from "../app/components/About"
import Navbar from "./components/Navbar";
import '@fontsource/poppins';

export default function Home() {
  return (
    <>
       <Navbar />
       <Head>
        <title>  Discover Azerbaijan - FilmWorks</title>
        <meta
          name="description"
          content="Your next film destination. Discover Azerbaijan's stunning film locations and rich cultural heritage."
        />
        <link rel="icon" href="/logo.png" />
      </Head> 
      <Header /> 
      <Locations /> 
      <About/>
      <Services /> 
      <Contact />
    </>
  );
}
