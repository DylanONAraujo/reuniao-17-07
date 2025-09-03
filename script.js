console.log("Hello World");
console.log("teste2");

// Agendamento
// Camel Case - Snake Case

var nomeServico = "Corte";
var dtAgendamento = "18/07/2025";
var hrAgendamento = "10:30";
var responsavel = "Dylan";
var nomeCliente = "Gabriel";
var valor = "100,00";
// objeto

function teste(){

 if (responsavel === "Erick"){
    console.log(nomeCliente);

 } else{
    console.log("Serviço: " + nomeServico + "\n data:" + dtAgendamento);
    
 }
}

teste();