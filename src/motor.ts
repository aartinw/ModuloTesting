import { partida } from "./model";
export const generarNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;
export const generarNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};

export const gestionarEstadoPartida = () => {
  if (partida.puntuacion === 7.5) {
    partida.estadoPartida = "Ganar";
  } else if (partida.puntuacion > 7.5) {
    partida.estadoPartida = "Perder";
  }

  return partida.estadoPartida;
};

export const obtenerUrlCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return "imgs/1_as-copas.jpg";
    case 2:
      return "imgs/2_dos-copas.jpg";
    case 3:
      return "imgs/3_tres-copas.jpg";
    case 4:
      return "imgs/4_cuatro-copas.jpg";
    case 5:
      return "imgs/5_cinco-copas.jpg";
    case 6:
      return "imgs/6_seis-copas.jpg";
    case 7:
      return "imgs/7_siete-copas.jpg";
    case 10:
      return "imgs/10_sota-copas.jpg";
    case 11:
      return "imgs/11_caballo-copas.jpg";
    case 12:
      return "imgs/12_rey-copas.jpg";
    default:
      return "";
  }
};

export const obtenerPuntosCarta = (numeroCarta: number) => {
  if (numeroCarta > 7) {
    return 0.5;
  }

  return numeroCarta;
};
