// Slot Machine
import { FRUITS } from "../../constants/fruits";

class SlotMachine {
  private coins: number;

  constructor(coins: number) {
    this.coins = coins;
  }

  // Generamos un símbolo aleatorio del array de constantes.
  private getRandomSymbol(): string {
    const randomIndex = Math.floor(Math.random() * FRUITS.length);
    return FRUITS[randomIndex];
  }

  // Generamos una tirada de tres símbolos aleatorios.
  private spin(): [string, string, string] {
    return [
      this.getRandomSymbol(),
      this.getRandomSymbol(),
      this.getRandomSymbol(),
    ];
  }

  // Comprobamos si todos los símbolos de la tirada son iguales.
  private isJackpot(result: readonly [string, string, string]): boolean {
    const [first, second, third] = result;
    return first === second && second === third;
  }

  // Cada partida añade una moneda al contador de la máquina.
  // Generamos una tirada de tres símbolos y mostramos el resultado por consola.
  // Si los tres símbolos coinciden, el jugador gana todas las monedas acumuladas y el contador se reinicia.
  play(): void {
    this.coins += 1;

    const result = this.spin();
    console.log(result.join(" | "));

    if (this.isJackpot(result)) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!\n`);
      this.coins = 0;
      return;
    }

    console.log("Good luck next time!!\n");
  }
}

// Ejemplos de uso:
const machine1 = new SlotMachine(0);

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
