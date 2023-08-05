const form = document.getElementById("form-atividade");
let linhas = " "
const imgAprovado = '<img src="./images/aprovado.png" alt= "emoji de aprovado"</img> ';
const imgReprovado = '<img src="./images/reprovado.png" alt= "emoji de reprovado"</img> ';
const atividades = [];
const notas = [];
const spanAprovado = '<span class ="resultado rprovado">Aprovado</span>';
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('digite a nota minima:'))





    form.addEventListener('submit', function(e){
        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
        atualizaMediaFinal();



    })


    function adicionaLinha() {
        
        const inputNomeAtividade = document.getElementById("nome-atividade");
        const inputNotaAtivade = document.getElementById("nota-atividade");

        if (atividades.includes(inputNomeAtividade.value)) {
            alert(`A atividade : ${inputNomeAtividade.value} ja foi inserida`)
        } else {
            atividades.push(inputNomeAtividade.value);
            notas.push(parseInt(inputNotaAtivade.value));
    
            let linha = "<tr>";
            linha += `<td>${inputNomeAtividade.value}</td>`;
            linha += `<td>${inputNotaAtivade.value}</td>`;
            linha += `<td>${inputNotaAtivade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
            linha += "</tr>";

            linhas += linha
        }



        inputNomeAtividade.value = "";
        inputNotaAtivade.value = "";

    }

    function atualizaTabela() {

        
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;

    }


    function atualizaMediaFinal() {
        const mediaFinal = calculaMediaFinal();


        document.getElementById("media-final-valor").innerHTML = mediaFinal;
        document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;



    }

    function calculaMediaFinal() {
        let somaDasNotas = 0;

        for ( let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i]
        }

            

            return somaDasNotas / notas.length;

        
    }