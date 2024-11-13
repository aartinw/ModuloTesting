import { dameCarta, plantarsePartida, resetJuego } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dameCarta")?.addEventListener("click", dameCarta);
  document
    .getElementById("mePlanto")
    ?.addEventListener("click", plantarsePartida);

  resetJuego();
});
