// MARS - cvičení mimozemský život

const dnes = dayjs().format("DD.MM.YYYY")
const budoucnost = dayjs("2034-07-21")
const selektor = document.querySelector(".odpoved")
const jakyJeDen = prompt("Zadej dnešní datum ve formátu (YYYY-MM-DD):", dayjs().format("DD.MM.YYYY"))

if(budoucnost.isAfter(jakyJeDen)) {
    selektor.textContent = "NE"
    selektor.style.color = "#9b0000"
} else {
    selektor.textContent = "ANO"
    selektor.style.color = "green"
}