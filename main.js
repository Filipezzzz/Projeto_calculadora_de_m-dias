const form = document.getElementById("form-atividade");
const inputNomeAtividade = document.getElementById("nome-atividade")
const inputNotaAtivade = document.getElementById("nota-atividade")
let linhas = " "
const imgAprovado = '<img src="./images/aprovado.png" alt= "emoji de aprovado"</img> ';
const imgReprovado = '<img src="./images/reprovado.png" alt= "emoji de reprovado"</img> ';
const atividades = [];
const notas = [];




    form.addEventListener('submit', function(e){
        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
        atualizaMediaFinal();



    })


    function adicionaLinha() {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtivade.value));

        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtivade.value}</td>`;
        linha += `<td>${inputNotaAtivade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += "</tr>";

        linhas += linha

        inputNomeAtividade.value = " ";
        inputNotaAtivade.value = " ";

    }

    function atualizaTabela() {

        
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;

    }


    function atualizaMediaFinal() {
        const mediaFinal = calculaMediaFinal();

        document.getElementById("media-final-valor").innerHTML = mediaFinal;
        document.getElementById("media-final-resultado").innerHTML = mediaFinal >= 7 ? "Aprovado" : "Reprovado";



    }

    function calculaMediaFinal() {
        let somaDasNotas = 0;

        for ( let i = 0; i < notas.length; i++);
            somaDasNotas += notas.length[i];

        return somaDasNotas / notas.length;




    }