
import Heading from "../little-lemon-sections/heading-pages/Heading";
import Specials from "../little-lemon-sections/heading-pages/Specials";
import Testimonials from "../little-lemon-sections/heading-pages/Testimonials";
import About from "../little-lemon-sections/heading-pages/About";

export default function HomePage(params) {
    return (
      <>
        <Heading />
        <main>
          <Specials />
          <Testimonials />
          <About />
        </main>
      </>
    );
  }