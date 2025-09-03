// Agendamento
// Camel Case - Snake Case

var nomeServico = "Corte";
var dtAgendamento = "18/07/2025";
var hrAgendamento = "10:30";
var responsavel = "Dylan";
var nomeCliente = "Gabriel";
var valor = "100,00";

var barbeiros = [
    {
        nome: "Dylan",
        escala: ["Segunda","Quarta","Sexta"]
    },
    {
        nome: "Gabriel",
        escala:["Terça","Quinta","Sábado"]
    },

]

// objeto

// Dylan - Segunda - Quarta e Sexta
// Gabriel - Terça - Quinta e Sábado


function mostraEscala(){
    let diaMarcado = "Sábado";
    for (let i = 0; i < barbeiros.length; i++) {
        const barbeiro = barbeiros[i];
        
        for (let x = 0; x < barbeiro.escala.length; x++) {
            const escala = barbeiro.escala[x];
            if(diaMarcado === escala){
                console.log(barbeiro.nome);
            } 
        }
    }
}

mostraEscala();