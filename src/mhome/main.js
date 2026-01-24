import Header from '../header/header';
import Hero from '../hero/hero';
import Footer from '../footer/footer';
import Contact from '../contact/contact';
import About from '../about/about';
import Tours from '../tours/tours';
import Testimonials from '../testimonials/testimonials';

export default function Mhome() {
    return (
        <>
            <Header />
            <Hero />
            <Tours />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}