/***
 * @author: henrique, J. F. S.
 * @version: 1.0.0
 * @license: MIT
*/

import Footer from "@/_components/Footer";
import Header from "@/_components/Header"
import Hero from "@/_components/Hero";

export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="">
            <Hero />
        </main>
        <Footer />
    </div>
  );
}
