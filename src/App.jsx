import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Cursorfollow from './components/Cursorfollow';
import FeaturedProducts from './components/FeaturedProjects';
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Cursorfollow />
      <FeaturedProducts />
    </div>
  );
};

export default App;
