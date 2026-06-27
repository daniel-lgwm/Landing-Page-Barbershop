gsap.registerPlugin(ScrollTrigger);

const botao =
document.getElementById("toggle-theme");

const fundo =
document.querySelector(".fundo");
const agendamento =
document.querySelector(".agendamento");

botao.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    fundo.classList.toggle("dark-mode");

    agendamento.classList.toggle("dark-mode");

    botao.classList.toggle("ativo");
});

gsap.from(".skill h1", {
    y: -80,
    opacity: 0,
    duration: 2,
    delay: 1
});

gsap.from(".skill h2", {
    x: -60,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

gsap.from(".skill p", {
    x: -60,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

gsap.from(".card-servico", {
    opacity: 0,
    duration: 1,
    stagger:0.25
});

gsap.from(".form-agendamento", {
    x: 120,
    opacity: 0,
    duration: 1.2
});

gsap.from(".botao-tema", {
    scale: 1.15,
    duration: 0.15,
    yoyo: true,
    repeat: 1
});

gsap.from(".agendamento", {
    scrollTrigger: ".agendamento",
    y: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".servicos-precos", {
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.from("h3", {
    y: -90,
    opacity: 0,
    duration: 1
});