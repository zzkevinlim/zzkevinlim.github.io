import { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import NavigationMenu from './components/NavigationMenu';
import './App.css';

const App = () => {
  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      document.body.classList.add('debug-screens');

      return () => {
        document.body.classList.remove('debug-screens');
      };
    }
  }, []);

  return (
    <div className="px-4 lg:px-0 lg:ml-[13.125rem] xl:ml-[17.1875rem]">
      <NavigationMenu />
      <Outlet />
    </div>
  );
}

export default App;
