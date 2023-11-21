// Clase Pokémon
class Pokemon {
    constructor(HP, ataque, defensa) {
      this.HP = HP;
      this.ataque = ataque;
      this.defensa = defensa;
      this.movimiento = "";
      this.nivel = 1;
      this.tipo = "";
    }
  
    flight() {
      if (this.movimiento === "") {
        throw new Error("No se especificó ningún movimiento.");
      }
    }
  
    canFly() {
      if (this.tipo === "") {
        throw new Error("No se especificó ningún tipo.");
      }
      return this.tipo.includes("volar");
    }
  }
  
// Clase Charizard que hereda de Pokémon
class Charizard extends Pokemon {
    constructor(HP, ataque, defensa, movimiento) {
      super(HP, ataque, defensa);
      this.movimiento = movimiento;
      this.tipo = "disparar/volar";
    }
  
    fight() {
      if (this.movimiento !== "") {
        console.log(`Utilizando el movimiento: ${this.movimiento}`);
        return this.ataque;
      } else {
        throw new Error("Se debe especificar un movimiento.");
      }
    }
  }
  
// Ejemplo de uso
const charizard = new Charizard(80, 100, 75, "Lanzallamas");
charizard.flight(); // Error: No se especificó ningún movimiento.
charizard.canFly(); // true, ya que el tipo incluye "volar"
charizard.fight(); // Utilizando el movimiento: Lanzallamas
  