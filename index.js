
let nome = "Coragem";
let xpHero = 5001;
 
switch (xpHero > 0) {
    case xpHero <= 1000:
        console.log("O Herói de nome " + nome + " está no nível de Ferro")
        break
        case xpHero > 1000 && xpHero <= 2000:
            console.log("O Herói de nome " + nome + " está no nível de Bronze")
            break
            case xpHero > 2000 && xpHero <= 5000:
                console.log("O Herói de nome " + nome + " está no nível de Prata")
                break;
                case xpHero > 5000 && xpHero <= 7000:
                    console.log("O Herói de nome " + nome + " está no nível de Ouro")
                    break;
                    case xpHero > 7000 && xpHero <= 8000:
                        console.log("O Herói de nome " + nome + " está no nível de Platina")
                        break;
                        case xpHero > 8000 && xpHero <= 9000:
                            console.log("O Herói de nome " + nome + " está no nível de Ascendente")
                            break;
                            case xpHero > 9000 && xpHero <= 10000:
                                console.log("O Herói de nome " + nome + " está no nível de Imortal")
                                break;
                                case xpHero > 10000:
                                    console.log("O Herói de nome " + nome + " está no nível de Radiante")
                                    break;
}
