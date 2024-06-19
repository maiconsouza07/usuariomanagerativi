import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TemaProvider } from './components/Tema';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
]);

function App() {
  return (
    <TemaProvider>
      <div>
        <Cabecalho />
        <main className="container-lg mt-5">
          <RouterProvider router={router} />
        </main>
        <Rodape />
      </div>
    </TemaProvider>
  );
}

export default App;
