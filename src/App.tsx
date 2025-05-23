import './App.css'
import { useRoutes } from "react-router-dom";
import { routes } from "@/routes/routeConfig";
import { useEffect } from 'react';
import { persistor } from './store';
function App() {

  useEffect(() => {
    // clearing persited store vlaues for testing 
    if (true) {
      persistor.purge().then(() => {
        console.log('Persisted store cleared');
      });
    }
  }, []);

  const element = useRoutes(routes);
  return element;
}

export default App;
