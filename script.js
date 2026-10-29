// Atualiza o ano no rodapé.
document.getElementById("ano").textContent = new Date().getFullYear();

// Leva cada link do menu até a seção correspondente.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const secao = document.querySelector(link.getAttribute("href"));
    if (!secao) return;
    event.preventDefault();
    secao.scrollIntoView({ behavior: "smooth" });
  });
});
