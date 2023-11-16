// import {
//   CustomerReviews,
//   Footer,
//   Hero,
//   PopularProducts,
//   Services,
//   SpecialOffer,
//   Subscribe,
//   SuperQuality,
// } from "./sections";

import Nav from "./components/Nav";
import Hero from "./sections/Hero"; 
import PopularProducts from "./sections/PopularProducts"; 
import SuperQuality from "./sections/SuperQuality"; 
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";





const App = () => (
  <main className="relative">
    <Nav />

    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero /> {/* Replace the Hero placeholder with the actual Hero component */}
    </section>

    <section className="xl:padding-1 wide:padding-r padding-b">
      <PopularProducts /> {}
    </section>

    <section className="xl:padding-1 wide:padding-r padding-b">
      <SuperQuality /> {}
    </section>

    <section className="xl:padding-1 wide:padding-r padding-b">
      <Services /> {}
    </section>

    <section className="xl:padding-1 wide:padding-r padding-b">
      <SpecialOffers /> {}
    </section>

    <section className="xl:padding-1 wide:padding-r padding-b">
      <CustomerReviews /> {}
    </section>

    <section className="xl:padding-1 wide:padding-r padding-b">
      <Subscribe /> {}
    </section>

    <section className="xl:padding-1 wide:padding-r padding-b">
      <Footer /> {}
    </section>

    

    {/* ... (rest of your sections) */}

  </main>
);

export default App;


// const App = () => (
//   <main className="relative">
    
//     <Nav /> 

//     <section className="xl:padding-1 wide:padding-r padding-b">
//       Hero
//     </section>

//     <section className="padding">
//       PopularProducts
//     </section>

//     <section className="padding">
//       SuperQuality
//     </section>

//     <section className="padding-x, py-10">
//       Services
//     </section>

//     <section className="padding">
//       SpecialOffers
//     </section>

//     <section className="bg-pale-blue padding">
//       CustomerReviews
//     </section> <section className="padding-x sm:py-32 py-16 w-full">
//       Subscribe
//     </section> <section className="bg-black padding-x padding-t pb-8">
//       Footer
//     </section>


//   </main>
// )

// export default App;