const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");

const inicioLoja = "21 May 2022";

function contagemRegressiva()
{
    const inicioLojaData = new Date(inicioLoja);
    const atualData = new Date();

    const totalSegundos = (inicioLojaData - atualData) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos /3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasElemento.innerHTML = dias;
    horasElemento.innerHTML = formatTime(horas);
    minutosElemento.innerHTML = formatTime(minutos);
    segundosElemento.innerHTML = formatTime(segundos);
}

function formatTime(time)
{
    return time < 0 ? '0${time}' : time;
}

contagemRegressiva();

setInterval(contagemRegressiva, 1000);