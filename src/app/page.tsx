import Image from "next/image";
import Hero from './components/hero'
import Best from "./components/best";
import Feature from './components/feature'
import Gear from './components/gear'
import Footer from './components/footer'
export default function Home() {
  return (
    <div>

      <Hero/>
      <Best/>
      <Feature/>
      <Gear/>
      <Footer/>
    </div>
  );
}
