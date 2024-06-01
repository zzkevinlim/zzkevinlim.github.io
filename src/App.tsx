import './App.css';
import { useEffect } from 'react';
import NavigationMenu from './components/NavigationMenu';
import TagLine from './components/TagLine';
import ProjectList from './components/ProjectList';

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
      <div className="grow">
        <TagLine />
        <ProjectList />
      </div>
    </div>
  )
}

export default App
