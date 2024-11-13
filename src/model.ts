export let juegoTerminado = false;

interface Partida {
  puntuacion: number;
  estadoPartida: Estado;
}

export const partida: Partida = {
  puntuacion: 0,
  estadoPartida: "seguir_jugando",
};

export type Estado = "Ganar" | "Perder" | "seguir_jugando";

export const getPuntuacion = () => partida.puntuacion;
export const setPuntuacion = (nuevoValor: number) => {
  partida.puntuacion = nuevoValor;
};

export const estadoJuego = () => juegoTerminado;

export const setEstadoJuego = (estado: boolean) => {
  juegoTerminado = estado;
};

export const reiniciarJuego = () => {
  partida.puntuacion = 0;
  partida.estadoPartida = "seguir_jugando";
  juegoTerminado = false;
};
