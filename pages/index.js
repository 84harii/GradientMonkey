import Head from "next/head"
import Image from "next/image"
import { SettingsProvider } from "../context/SettingsContext"
import AnimatedBackground from "../components/AnimatedBackground"
import Controls from "../components/Controls"
import Output from "../components/Output"
// import Image from 'next/image'

let Background = 'https://i.pinimg.com/originals/d1/7d/e1/d17de177f36718c749d89b6a4e9831e6.jpg'


export default function Home() {
  return (
    <>
      <Head>
        <title>AnimeGradient - HARII</title>
        <meta
          name="description"
          content="A tool for creating animated background gradients in pure CSS."
        />
        <link rel="icon" href="https://i.postimg.cc/fR1Q9n5q/year-of-monkey.png" />
      </Head>

      <SettingsProvider>
        <AnimatedBackground>
          <main style={{ textAlign: "center", padding: "32px 8px" }}>
            {/* main 3d title -home page  */}
            {/* <h1 data-heading="Animated Gradient">
              <span contenteditable data-heading="Animated Gradient">Animated Gradient</span>
            </h1> */}

            <span className="heading">GRADIENT</span>
            <img
              className=" logo"
              src="https://i.postimg.cc/fR1Q9n5q/year-of-monkey.png"
              width={46}
              height={46}
              alt="gradientmonkey"
            />  
            <span className="heading">MONKEY</span>

            <Controls />
            <Output />
          </main>
          <footer style={{ textAlign: "center", padding: "0 32px 64px" }}>
            <p>
              Designed by  {" "}
              <a href="http://instagram.com/harii.84" target='_harii'>HARII</a> <img src='https://i.postimg.cc/wv91SbZ2/icons8-instagram.gif' alt='instagram logo' />
            </p>
          </footer>

 
        </AnimatedBackground>
      </SettingsProvider>

    </>
  )
}
