class SlockMachine {
  #count: number = 0;
  #name: string;

  constructor(name: string = "Doe Machine") {
    this.#name = name;
  }

  play = () => {
    this.#count++;

    const bools = [
      this.#getRandomBoolean(),
      this.#getRandomBoolean(),
      this.#getRandomBoolean(),
    ];

    const isWin = !bools.some((bool) => !bool);

    if (!isWin) {
      console.log(`[${this.#name}] Good luck next time!!`);
      return;
    }
    console.log(
      `[${this.#name}] Congratulations!!!. You won ${this.#count} coins!!`
    );
    this.#count = 0;
  };

  #getRandomBoolean = () => Math.random() < 0.5;
}

const slockMachine = new SlockMachine();
const slockMachine2 = new SlockMachine("Lemonmaquina");

slockMachine.play();
slockMachine.play();
slockMachine.play();
slockMachine.play();
slockMachine.play();

slockMachine2.play();
slockMachine2.play();
slockMachine2.play();
slockMachine2.play();
slockMachine2.play();
