import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Cursorfollow from './components/Cursorfollow';

const App = () => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // lerp: 0.07,
      // multiplier: 1,
    });

    // Recalculate scroll when DOM changes (e.g., images loaded)
    setTimeout(() => {
      scrollInstance.current.update();
    }, 1000);

    return () => {
      scrollInstance.current.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Cursorfollow />
    </div>
  );
};

export default App;
