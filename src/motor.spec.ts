import { vi } from "vitest";
import {
  gestionarEstadoPartida,
  generarNumeroCarta,
  obtenerPuntosCarta,
} from "./motor";
import { partida, Estado } from "./model";

describe("gestionarEstadoPartida", () => {
  it("Deberia de devolver Seguir Jugando cuando la puntuación es inferior a 7.5", () => {
    //Arrange
    const numero: number = 3;
    const estadoEsperado: Estado = "seguir_jugando";
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(numero);

    //Act
    const resultado = gestionarEstadoPartida();

    //Assert
    expect(resultado).toBe(estadoEsperado);
  });
  it("Deberia de devolver Ganar cuando la puntuación es igual a 7.5", () => {
    //Arrange
    const numero: number = 7.5;
    const estadoEsperado: Estado = "Ganar";
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(numero);

    //Act
    const resultado = gestionarEstadoPartida();

    //Assert
    expect(resultado).toBe(estadoEsperado);
  });

  it("Deberia de devolver Perder cuando la puntuación es superior a 7.5", () => {
    //Arrange
    const numero: number = 10;
    const estadoEsperado: Estado = "Perder";
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(numero);

    //Act
    const resultado = gestionarEstadoPartida();

    //Assert
    expect(resultado).toBe(estadoEsperado);
  });
});

describe("generarNumeroCarta", () => {
  it("Deberia de devolver el mismo número obtenido en el numero aleatorio", () => {
    //Assert
    const numero: number = 3;
    const resultadoEsperado: number = 3;

    //Act
    const resultado = generarNumeroCarta(numero);

    //Arrange
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia de devolver el número sumado +2 obtenido en el numero aleatorio", () => {
    //Assert
    const numero: number = 9;
    const resultadoEsperado: number = 11;

    //Act
    const resultado = generarNumeroCarta(numero);

    //Arrange
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerPuntosCarta", () => {
  it("Deberia de devolver el mismo numero obtenido en el numero aleatorio generado", () => {
    //Assert
    const numero: number = 4;
    const resultadoEsperado: number = 4;

    //Act
    const resultado = obtenerPuntosCarta(numero);

    //Arrange
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia de devolver 0.5", () => {
    //Assert
    const numero: number = 8;
    const resultadoEsperado: number = 0.5;

    //Act
    const resultado = obtenerPuntosCarta(numero);

    //Arrange
    expect(resultado).toBe(resultadoEsperado);
  });
});
