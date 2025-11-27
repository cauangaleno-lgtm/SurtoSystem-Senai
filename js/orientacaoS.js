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
  const equipe = document.getElementById("equipe").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const orientador = document.getElementById("orientador").value;
  const observacoes = document.getElementById("observacoes").value;

  if (!equipe || !data || !hora || !orientador) {
    alert("Por favor, preencha os campos obrigatórios!");
    return;
  }

  const registro = {
    equipe,
    data,
    hora,
    orientador,
    observacoes,
  };

  console.log("Registro salvo:", registro);
  localStorage.setItem("registroAtividade", JSON.stringify(registro));

  alert("Registro salvo com sucesso!");
  modal.style.display = "none";

  // Limpar campos
  document.getElementById("equipe").value = "";
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("orientador").value = "";
  document.getElementById("observacoes").value = "";
});



