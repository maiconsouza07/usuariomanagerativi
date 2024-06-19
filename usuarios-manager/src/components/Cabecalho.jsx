import { useTema } from './Tema';

function Cabecalho() {
  const { tema } = useTema();

  const headerClass = `container-fluid text-center p-3 ${
    tema === 'claro' ? 'bg-success text-light' : 'bg-dark text-light'
  }`;

  return (
    <>
      <header className={headerClass}>
        <h1>Usuários Manager</h1>
      </header>
    </>
  );
}

export default Cabecalho;
