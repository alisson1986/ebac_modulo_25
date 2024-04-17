var notasDosEstudantes= [
    {
        nome: "Alex",
        nota: 6,
    },
    {
        nome: "Aline",
        nota: 7,
    },
    {
        nome: "Bernardo",
        nota: 5,
    },
    {
        nome: "Bianca",
        nota: 10,
    },
    {
        nome: "Carol",
        nota: 3,
    },
    {
        nome: "David",
        nota: 2,
    }
];

var filtraAprovados = function filtraAprovados(aluno, indice) {
    return aluno.nota >= 6;
}
var aprovados = notasDosEstudantes.filter(filtraAprovados);
console.log(aprovados);