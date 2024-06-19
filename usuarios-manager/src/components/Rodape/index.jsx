import rodape from './rodape.module.css';

import { useTema } from '../Tema';

function Rodape() {
  const { tema } = useTema();

  const rodapeClass = `container-fluid text-center mt-5 ${rodape.rodape} + ${
    tema === 'claro' ? 'bg-success text-light' : 'bg-dark text-light'
  }`;

  return (
    <footer className={rodapeClass}>
      <p className="p-3">&copy; 2024. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Rodape;
