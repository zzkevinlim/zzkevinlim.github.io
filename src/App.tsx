import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import NavigationMenu from './components/NavigationMenu';
import Footer from './components/Footer';
import './App.css';
import { useTransition, animated } from '@react-spring/web';

const App = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, },
    enter: { opacity: 1, },
    config: { duration: 500 },
  });

  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      document.body.classList.add('debug-screens');

      return () => {
        document.body.classList.remove('debug-screens');
      };
    }
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen px-4 lg:px-0 lg:ml-[13.125rem] xl:ml-[17.1875rem]">
      <NavigationMenu />
      {transitions((props) => (
        <animated.div style={props} className="grow flex flex-col">
          <Outlet />
        </animated.div>
      ))}
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}

export default App;
