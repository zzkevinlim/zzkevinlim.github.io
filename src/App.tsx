import { useEffect } from 'react';
import './App.css'
import NavigationMenu from './components/NavigationMenu';
import ProjectList from './components/ProjectList';
import TagLine from './components/TagLine';

function App() {
  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      document.body.classList.add('debug-screens');

      return () => {
        document.body.classList.remove('debug-screens');
      };
    }
  }, []);

  return (
    <>
      <div className="flex">
        <NavigationMenu />
        <div>
          <TagLine />
          <ProjectList />
        </div>
      </div>
    </>
  )
}

export default App
