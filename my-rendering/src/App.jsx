// Atividade Normal
//
// function App() {
//   // Variável que simula o tipo de usuário
//   const userType = "Admin"; // Mude para "Visitante" para testar o conteúdo

//   return (
//     <div>
//       {/* Renderização Condicional */}
//       {userType === "Admin" ? (
//         <div>
//           <h1>Bem-vindo, Admin</h1>
//           <button>Gerenciar Usuários</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Bem-vindo, Visitante</h1>
//           <button>Fazer Login</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// Desafio
//
function App() {
  // Variável que simula o tipo de usuário
  const userType = "Admin Andrei"; // Pode ser "Admin", "Visitante" ou "Editor"

  return (
    <div>
      {/* Renderização Condicional */}
      {userType === "Admin" ? (
        <div>
          <h1>Bem-vindo, Admin</h1>
          <button>Gerenciar Usuários</button>
        </div>
      ) : userType === "Editor" ? (
        <div>
          <h1>Bem-vindo, Editor</h1>
          <button>Editar Conteúdo</button>
        </div>
      ) : (
        <div>
          <h1>Bem-vindo, Visitante</h1>
          <button>Fazer Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
