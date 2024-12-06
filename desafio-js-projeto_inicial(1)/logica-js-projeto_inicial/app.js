let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
let lista1 = ['João', 'Jose', 'Josué'];
let lista2 = ['João', 'José', 'Josué'];
let lista3 = ['João', 'José', 'Josué'];

function adicionarLinguagem() {
    const novasLinguagens = ['Java', 'Ruby', 'GoLang'];
    novasLinguagens.forEach(linguagem => {
        if (!linguagensDeProgramacao.includes(linguagem)) {
            linguagensDeProgramacao.push(linguagem);
        }
    });
    console.log(linguagensDeProgramacao);
}

adicionarLinguagem();
console.log(lista1[0]);
console.log(lista2[1]);
console.log(lista3[2]);