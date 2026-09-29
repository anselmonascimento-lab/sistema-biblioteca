// Módulo de Registro de Empréstimo (RF06)
exports.registrarEmprestimo = (usuarioId, livroId) => {
  const dataDevolucao = new Date();
  dataDevolucao.setDate(dataDevolucao.getDate() + 14); // Prazo de 14 dias
  return { usuarioId, livroId, dataDevolucao, status: 'Ativo' };
};