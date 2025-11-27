const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const cancelarBtn = document.getElementById("cancelarBtn");
const registrarBtn = document.getElementById("registrarBtn");

// Abre o modal
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fecha o modal ao clicar em cancelar
cancelarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Registrar dados (simulação)
registrarBtn.addEventListener("click", () => {
  const observacoes = document.getElementById("feedbacks").value;

  if (!feedbacks) {
    alert("Por favor, preencha o seu feedback!");
    return;
  }

  const registro = {
    feedbacks,
  };

  console.log("Registro salvo:", registro);
  localStorage.setItem("registro", JSON.stringify(registro));

  alert("Feedback salvo com sucesso!");
  modal.style.display = "none";

  // Limpa os campos
  document.getElementById("nome").value = "";
  document.getElementById("data").value = "";
  document.getElementById("observacoes").value = "";
});

