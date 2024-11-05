class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const mago = new Heroi("Gandalf", 1000, "mago");
mago.atacar();

const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
guerreiro.atacar(); 

const monge = new Heroi("Aang", 12, "monge");
monge.atacar();

const ninja = new Heroi("Naruto", 17, "ninja");
ninja.atacar();
