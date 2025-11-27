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
  const sala = document.getElementById("sala").value;
  const turno = document.getElementById("turno").value;
  const tema = document.getElementById("tema").value;
  const data = document.getElementById("data").value;
  const participantes = document.getElementById("participantes").value;
  const observacoes = document.getElementById("observacoes").value;

  if (!sala || !turno || !tema || !data) {
    alert("Por favor, preencha os campos obrigatórios!");
    return;
  }

  const registro = {
    sala,
    turno,
    tema,
    data,
    participantes,
    observacoes,
  };

  console.log("Registro salvo:", registro);
  localStorage.setItem("registroAtividade", JSON.stringify(registro));

  alert("Registro salvo com sucesso!");
  modal.style.display = "none";

  // Limpar campos
  document.getElementById("sala").value = "";
  document.getElementById("turno").value = "";
  document.getElementById("tema").value = "";
  document.getElementById("data").value = "";
  document.getElementById("participantes").value = "";
  document.getElementById("observacoes").value = "";
});
