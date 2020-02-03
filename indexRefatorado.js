const PETSHOP = "Petshop DH";

console.log("** " + PETSHOP + " **");

// arrays de objetos pets
let pets = [{
    nome: "Dutch",
    tipo: "Cão",
    raca: "Vira-Lata",
    idade: 5,
    genero: "Macho",
    servicos: [],
    vacinado: true
}, {
    nome: "German",
    tipo: "Cão",
    raca: "Pastor",
    idade: 3,
    genero: "Macho",
    servicos: [],
    vacinado: true
}, {
    nome: "English",
    tipo: "Cão",
    raca: "Bulldog",
    idade: 10,
    genero: "Macho",
    servicos: [],
    vacinado: true
}, {
    nome: "Brazilian",
    tipo: "Cão",
    raca: "Vira-Lata",
    idade: 1,
    genero: "Macho",
    servicos: [],
    vacinado: false
    }];

const anoDeNascimento = pet => 2020 - pet.idade;

anoDeNascimento(pets);

const vacinarPet = pet => {
    for(let i = 0; i<pet.length; i++){
        if(!pet[i].vacinado){
            console.log("não está vacinado");
            pet[i].vacinado = true;
            console.log("Agora está vacinado");
        }else{
            console.log("está vacinado");
        }
    }
}

vacinarPet(pets);

const exibePets = pet =>{
    for(let i = 0; i<pet.length; i++){
        console.log("-----------------------------------")
        console.log("nome: " + pet[i].nome);
        console.log("Tipo: " + pet[i].tipo);
        console.log("Raca: " + pet[i].raca);
        console.log("Idade: " + pet[i].idade);
        console.log("Genero: " + pet[i].genero);
        console.log("Serviço: " + pet[i].servicos);
        console.log("Vacinado: " + (pets[i].vacinado ? "Sim": "Não"));
        
    }
}

exibePets(pets);

const validarDados = dadosPet => {
    return (
        dadosPet.nome &&
        dadosPet.idade &&
        dadosPet.genero &&
        dadosPet.tipo &&
        dadosPet.raca
    );
};

const adicionarPets = novoPet => {
    if(typeof novoPet =="object" && validarDados(novoPet)){
    pets.push(novoPet);
    novoPet.nome = novoPet.nome.toString();
    novoPet.idade = parseInt(novoPet.idade);
    if(!novoPet.servicos){
        novoPet.servicos = [];
    }
    console.log("Pet adicionado com sucesso")
    }
    else {
        console.log("Ops, insira um pet valido");
    }
};
    
adicionarPets({
    nome:"Spanish", 
    tipo: "Cão", 
    raca: "CockerSpanel", 
    idade: 8, 
    genero: "Macho", 
    servicos: ["banho","tosa"], 
    vacidado: true
});

const tosarPet = pet => {
    pet.servicos.push("tosa");
    console.log("Tosa realizada com sucesso");
};

const darBanhoPet = pet => {
    pet.servicos.push("banho");
    console.log("Banho realizada com sucesso");
};

const cortarUnhasPet = pet => {
    pet.servicos.push("Unha");
    console.log("Unhas cortadas!");
};

const atenderPet = (pet, servicos) => {
    console.log("Bem vindo, " + pet.nome);
    for (i = 0; i<servicos.length; i++){
        servicos[i](pet);
    }

    const pagar = () => {
        console.log ("Pagamento realizado com sucesso");
    }
    pagar();
   console.log("volte Sempre");
}
atenderPet(pets[0], [darBanhoPet, cortarUnhasPet]);


 
console.log(pets[0]);

const contarVacinados = (pet) => {
    let contadorVacinados = 0;
    let contadorNaoVacinados = 0;
    for (let i = 0; i < pet.length; i++) {
       pet[i].vacinado === true? contadorVacinados++ : contadorNaoVacinados++;
    }
    console.log('Foram encontrados ' + contadorNaoVacinados + ' pets não vacinados');
    console.log('Foram encontrados ' + contadorVacinados + ' pets vacinados');
}

const campanhaVacina = pet => {
    let contador = 0;
    for (let i = 0; i < pet.length; i++) {
        if(!pet[i].vacinado) contador++ ;
        vacinarPet(pet[i]);
    }
    console.log(contador + ' pet(s) foram vacinados nessa campanha!');
}
contarVacinados(pets);
campanhaVacina(pets);




