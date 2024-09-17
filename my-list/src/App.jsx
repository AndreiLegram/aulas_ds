function ListaPessoas({ pessoas }) {
  return (
    <ul>
      {pessoas
        .filter((pessoa) => pessoa.ativo && pessoa.nome.startsWith('A'))
        .map((pessoa) => (
          <li key={pessoa.id}>{pessoa.nome}</li>
        ))}
    </ul>
  );
}


function App() {
  const pessoas = [
    { id: 1, nome: "Maria", ativo: true },
    { id: 2, nome: "João", ativo: false },
    { id: 3, nome: "Andrei", ativo: true },
    { id: 4, nome: "Pedro", ativo: false },
    { id: 5, nome: "Augusto", ativo: false },
    { id: 6, nome: "Amanda", ativo: true },
  ];

  return <ListaPessoas pessoas={pessoas} />;
}

export default App;
