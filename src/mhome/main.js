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

            {/* Each component should have its own ID */}
            <main id="home">
                <Hero /> {/* Hero should have id="home" */}
                <Tours /> {/* Tours should have id="tours" */}
                <About /> {/* About should have id="about" */}
                <Testimonials /> {/* Testimonials should have id="testimonials" */}
                <Contact /> {/* Contact should have id="contact" */}
            </main>

            <Footer />
        </>
    );
}