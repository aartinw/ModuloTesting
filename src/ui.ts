import {
  reiniciarJuego,
  getPuntuacion,
  setPuntuacion,
  estadoJuego,
  setEstadoJuego,
} from "./model";
import {
  generarNumeroAleatorio,
  generarNumeroCarta,
  obtenerPuntosCarta,
  obtenerUrlCarta,
  gestionarEstadoPartida,
} from "./motor";

export const terminarJuego = () => {
  setEstadoJuego(true);
  desactivarBotones();
};

export const reiniciarPartida = () => {
  reiniciarJuego();
  resetJuego();
  actualizarPuntuacion();
  activarBotones();
};
export const gestionarPartida = () => {
  if (gestionarEstadoPartida() === "Ganar") {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    mostrarBotonReiniciar(reiniciarPartida);
    terminarJuego();
  } else if (gestionarEstadoPartida() === "Perder") {
    mostrarMensaje("¡Game Over! Has perdido.");
    mostrarBotonReiniciar(reiniciarPartida);
    terminarJuego();
  }
};

export const plantarsePartida = () => {
  if (gestionarEstadoPartida() === "Perder") return;

  setEstadoJuego(true);
  desactivarBotones();

  const puntuacionActual = getPuntuacion();
  if (puntuacionActual <= 4) {
    mostrarMensaje("Has sido muy conservador");
  } else if (puntuacionActual <= 5) {
    mostrarMensaje("Te ha entrado el canguelo eh?");
  } else if (puntuacionActual <= 6 || puntuacionActual < 7.5) {
    mostrarMensaje("Casi casi...");
  } else if (puntuacionActual === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
  }
  mostrarBotonReiniciar(reiniciarPartida);
};

export const dameCarta = () => {
  if (estadoJuego()) return;

  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(carta);
  mostrarUrlCarta(urlCarta);

  const puntosCarta = obtenerPuntosCarta(carta);
  setPuntuacion(getPuntuacion() + puntosCarta);

  actualizarPuntuacion();
  gestionarPartida();
};

// const deshabilitarBotonDameCarta = (estaDeshabilitado: boolean) => {
//   const botonDameCarta = document.getElementById('dameCarta');

//   if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
//     botonDameCarta.disabled = estaDeshabilitado;
//   }
// }

export const actualizarPuntuacion = () => {
  const nuevosPuntos = document.getElementById("puntuacionActual");
  if (nuevosPuntos) {
    nuevosPuntos.textContent = `Puntuacion: ${getPuntuacion()}`;
  }
};

export const mostrarUrlCarta = (urlCarta: string) => {
  const elementoImagen = document.getElementById("imagenCarta");

  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    elementoImagen.src = urlCarta;
  }
};
export const mostrarMensaje = (mensaje: string) => {
  const mensajeElemento = document.getElementById("mensajeFinal");
  if (mensajeElemento) {
    mensajeElemento.textContent = mensaje;
  }
};
export const desactivarBotones = () => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  )
    botonDameCarta.disabled = true;
  const botonMePlanto = document.getElementById("mePlanto");
  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  )
    botonMePlanto.disabled = true;
};

export const activarBotones = () => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  )
    botonDameCarta.disabled = false;

  const botonMePlanto = document.getElementById("mePlanto");
  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  )
    botonMePlanto.disabled = false;
};

export const mostrarBotonReiniciar = (reiniciarTodo: () => void) => {
  const reiniciarContainer = document.getElementById("nuevaPartida");
  if (reiniciarContainer && !document.getElementById("reiniciar")) {
    const botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "Nueva Partida";
    botonReiniciar.id = "reiniciar";
    botonReiniciar.addEventListener("click", () => {
      setPuntuacion(0);
      setEstadoJuego(false);
      reiniciarTodo();
    });
    reiniciarContainer.appendChild(botonReiniciar);
  }
};

export const resetJuego = () => {
  const elementoImagen = document.getElementById("imagenCarta");
  if (elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = "imgs/back.jpg";
  }

  const reiniciarContainer = document.getElementById("nuevaPartida");
  if (reiniciarContainer) {
    reiniciarContainer.innerHTML = "";
  }
  actualizarPuntuacion();
  mostrarMensaje("");
  activarBotones();
  reiniciarJuego();
};
