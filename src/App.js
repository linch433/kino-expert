import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const element = useRoutes(routes);

  return (
    <div className="min-h-screen bg-int-main-black font-montserrat">
      {element}
    </div>
  );
}

export default App;
