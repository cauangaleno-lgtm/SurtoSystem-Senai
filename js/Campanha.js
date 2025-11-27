const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const cancelarBtn = document.getElementById("cancelarBtn");
const registrarBtn = document.getElementById("registrarBtn");

// Abrir o modal
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fechar o modal ao clicar em cancelar
cancelarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar ao clicar fora da área do modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Registrar dados (simulação com console e localStorage)
registrarBtn.addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value;
  const data = document.getElementById("data").value;
  const turno = document.getElementById("turno").value;
  const turma = document.getElementById("turma").value;
  const descricao = document.getElementById("descricao").value;

  if (!titulo || !data || !turno || !turma) {
    alert("Por favor, preencha os campos obrigatórios!");
    return;
  }

  const registro = {
    titulo,
    data,
    turno,
    turma,
    descricao,
  };

  console.log("Registro salvo:", registro);
  localStorage.setItem("registroAtividade", JSON.stringify(registro));

  alert("Registro salvo com sucesso!");
  modal.style.display = "none";

  // Limpar campos
  document.getElementById("titulo").value = "";
  document.getElementById("data").value = "";
  document.getElementById("turno").value = "";
  document.getElementById("turma").value = "";
  document.getElementById("descricao").value = "";
});
