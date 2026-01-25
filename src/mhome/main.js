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

            <section id="home">
                <Hero />
            </section>

            <section id="tours">
                <Tours />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <Footer />
        </>
    );
}
