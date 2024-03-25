const excelInput = document.getElementById('excel-input')
const textQuest = document.querySelector('#questao')

/* id placar */
let spanAcertos = document.querySelector('#spanAcertos')
let spanErros = document.querySelector('#spanErros')
let spanTotalQuestoes = document.querySelector('#spanTotalQuestoes')

/* testos da resposta */
let firstQuestion = document.querySelector('#firstQuestion')
let secondQuestion = document.querySelector('#secondQuestion')
let thirdQuestion = document.querySelector('#thirdQuestion')
let fourthQuestion = document.querySelector('#fourthQuestion')
let fifthQuestion = document.querySelector('#fifthQuestion')

/* seletor dos inputs */
let inputFirstQuestion = document.querySelector('#inputFirstQuestion')
let inputSecondQuestion = document.querySelector('#inputSecondQuestion')
let inputThirdQuestion = document.querySelector('#inputThirdQuestion')
let inputFourthQuestion = document.querySelector('#inputFourthQuestion')
let inputFifthQuestion = document.querySelector('#inputFifthQuestion')

/* os label dos inputs */
let labelFirstQuestion = document.querySelector('#labelFirstQuestion')
let labelSecondQuestion = document.querySelector('#labelSecondQuestion')
let labelThirdQuestion = document.querySelector('#labelThirdQuestion')
let labelFourthQuestion = document.querySelector('#labelFourthQuestion')
let labelFifthQuestion = document.querySelector('#labelFifthQuestion')


/* Botões de verificação e de próximo */
let botaoVerificacao = document.querySelector("#verificacao")
let nextQuestion = document.querySelector('#nextQuestion')
let botoesEscolhido = document.getElementsByName("escolhido");




let questaoEscolhida 
let quantItem



/* Função responsavel por mudar os valores do placar */
let totalErros = 0
let totalAcertos = 0
let totalQuestoes = 0
function placar(respostaRecebida){
    switch (respostaRecebida){
        case 'erro':
            totalErros += 1
        break
        case 'acerto':
            ++totalAcertos
        break
    }
    totalQuestoes += 1

    /* substitui os valores na tela de placar*/
    spanAcertos.innerHTML = totalAcertos
    spanErros.innerHTML = totalErros
    spanTotalQuestoes.innerHTML = totalQuestoes
}




/* Função responsavél por ler o arquivo excel com as questões e mostrar na tela */
async function dados() {
    /* Essa parte usa uma função da biblioteca read-excel-file para ler um arquivo excel */
    const content = await readXlsxFile(excelInput.files[0]) 

    quantItem = content.length
    
    /* Escolhe uma questão aleatoria no arquivo */
    questaoEscolhida = content[ Math.floor(Math.random() * (quantItem - 1) + 1)]  

    /* reseta o valor inicial de todos os inputs como errado */
    inputFirstQuestion.value = "errado"
    inputSecondQuestion.value = "errado"
    inputThirdQuestion.value = "errado"
    inputFourthQuestion.value = "errado"
    inputFifthQuestion.value = "errado"

    /*===============================================================================*/
    /* função para embaralhar as perguntas das questões */
    function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      }
      
    var myArray = [1, 2, 3, 4, 5]; 
    let aleatoiro = shuffle(myArray);
    /*===============================================================================*/
    

    /*===============================================================================*/
    /* Essa parte é responsavel por preencher os dados na tela */
    /* Enunciado */
    /* console.log(`Questão - ${questaoEscolhida[0]}`) */
    textQuest.innerText = questaoEscolhida[0]
   

    const respostaCorrect = questaoEscolhida[6]
    console.log(`Resposta: ${respostaCorrect}`)

    /* Essa parte é responavel por relacionar a resposta correta com a posição de input correto */
    
    firstQuestion.innerText = questaoEscolhida[aleatoiro[0]]
    if(questaoEscolhida[aleatoiro[0]] === respostaCorrect){
        console.log("0 Resposta: ",questaoEscolhida[aleatoiro[0]])
        inputFirstQuestion.value = "Resposta"

    }

    
    secondQuestion.innerText = questaoEscolhida[aleatoiro[1]]
    if(questaoEscolhida[aleatoiro[1]] === respostaCorrect){
        console.log("1 Resposta: ",questaoEscolhida[aleatoiro[1]])
        inputSecondQuestion.value = "Resposta"

    }

    
    thirdQuestion.innerText = questaoEscolhida[aleatoiro[2]]
    if(questaoEscolhida[aleatoiro[2]] === respostaCorrect){
        console.log("2 Resposta: ",questaoEscolhida[aleatoiro[2]])
        inputThirdQuestion.value = "Resposta"

    }

    
    fourthQuestion.innerText = questaoEscolhida[aleatoiro[3]]
    if(questaoEscolhida[aleatoiro[3]] === respostaCorrect){
        console.log("3 Resposta: ",questaoEscolhida[aleatoiro[3]])
        inputFourthQuestion.value = "Resposta"

    }

    
    fifthQuestion.innerText = questaoEscolhida[aleatoiro[4]]
    if(questaoEscolhida[aleatoiro[4]] === respostaCorrect){
        console.log("4 Resposta: ",questaoEscolhida[aleatoiro[4]])
        inputFifthQuestion.value = "Resposta"
    }




  
    /* reiniciar a cor da próxima pergunta escolhida. */
    firstQuestion.style = "background-color: none;" 
    secondQuestion.style = "background-color: none;"
    thirdQuestion.style = "background-color: none;"
    fourthQuestion.style = "background-color: none;" 
    fifthQuestion.style = "background-color: none;"

    /* reiniciar a cor da próxima pergunta escolhida. */
    labelFirstQuestion.style = "background-color: none;" 
    labelSecondQuestion.style = "background-color: none;"
    labelThirdQuestion.style = "background-color: none;"
    labelFourthQuestion.style = "background-color: none;"
    labelFifthQuestion.style = "background-color: none;"


    /* função responsavel por desmarcar os botões na próxima questão, senão ficaria já marcado na próxima */
    for (var i in botoesEscolhido) {
        if (botoesEscolhido[i].checked){
            botoesEscolhido[i].checked = false
        }   
           
    }  
    
    /*===============================================================================*/





    
    /*===============================================================================*/
    /* Essa parte é responsavél por adicionar a resposta certa no value do input resposta correta */
    /* const respostaCorrect = questaoEscolhida[6]
    console.log(`Resposta: ${respostaCorrect}`) */

/*     um codigo responsavel por verificar todas as questões da lista e verificar se ela é igual a resposta certa por fim colocar o valor do imput como correct */
 
    /* for (var i = 1; i <= 5; i++)  {
        console.log('entrouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu no loop')
        if(questaoEscolhida[i] === respostaCorrect ){
            console.log('VERifica se a respsota ta certa')
        } else {
            console.log('EEEEErrrrrraAAAAdddddOOOO')
        }
    }
     */

    /*===============================================================================*/
}




/* Função responsavel por verificar se a opção escolher foi a certa ou a errada */
function checar(){
    /* var botoesEscolhido = document.getElementsByName("escolha"); */
    /* let listaDeperguntas = [firstQuestion, secondQuestion, thirdQuestion,  fourthQuestion, fifthQuestion ]  */
    let listaLabelsResposta = [labelFirstQuestion, labelSecondQuestion, labelThirdQuestion, labelFourthQuestion, labelFifthQuestion]
    let listaDeperguntasValue = [inputFirstQuestion, inputSecondQuestion, inputThirdQuestion,  inputFourthQuestion, inputFifthQuestion ] 
   
    

    for (var i in botoesEscolhido) {
        if (botoesEscolhido[i].checked && listaDeperguntasValue[i].value == "Resposta") {
            /* alert("Escolheu: " + botoesEscolhido[i].value); */
            console.log("okkkkkkkk")
           /*  listaDeperguntas[i].style = "background-color: blue;"   */
            listaLabelsResposta[i].style = "background-color: #B5D99C;"  
            /* listaDeperguntas[i].style = "color: #B5D99C;"  */
            placar('acerto')

        } else if (botoesEscolhido[i].checked && listaDeperguntasValue[i].value == "errado") {
            /* listaDeperguntas[i].style = "background-color: red;"  */
            listaLabelsResposta[i].style = "background-color: #F29C6B;" 
            /* listaDeperguntas[i].style = "color: #F29C6B;"  */
            placar('erro')
            for (var ii = 0; ii <= 4; ii++){
                if (listaDeperguntasValue[ii].value == "Resposta") {
                    /* listaDeperguntas[ii].style = "background-color: blue;"  */
                    listaLabelsResposta[ii].style = "background-color: #B5D99C;"  
                    /* listaDeperguntas[ii].style = "color: #B5D99C;"  */
                }
            }
        }
           
    }  

   /*  if(inputFirstQuestion.value == "Resposta"){
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        firstQuestion.style = "background-color: green;" 
        

    } else if(inputSecondQuestion.value == "Resposta") {
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        secondQuestion.style = "background-color: green;"
        console.log(inputFirstQuestion.innerHTML)

    } else if(inputThirdQuestion.value == "Resposta") {
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        thirdQuestion.style = "background-color: green;"
        console.log(inputFirstQuestion.innerHTML)

    } else if(inputFourthQuestion.value == "Resposta") {
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        fourthQuestion.style = "background-color: green;" 
        console.log(inputFirstQuestion.innerHTML)

    } else if(inputFifthQuestion.value == "Resposta") {
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        fifthQuestion.style = "background-color: green;"
        console.log(inputFirstQuestion.innerHTML)
    }  */
}




excelInput.addEventListener('change', dados )





botaoVerificacao.addEventListener('click', checar)
/* botaoVerificacao.addEventListener('click', ()=>{ */
    /* console.log(inputFirstQuestion.value)
    console.log(inputSecondQuestion.value)
    console.log(inputThirdQuestion.value)
    console.log(inputFourthQuestion.value)
    console.log(inputFifthQuestion.value) */

    /* if(inputFirstQuestion.value == "Resposta"){
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        firstQuestion.style = "background-color: green;" 
        console.log(inputFirstQuestion.)

    } else if(inputSecondQuestion.value == "Resposta") {
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        secondQuestion.style = "background-color: green;"
        console.log(inputFirstQuestion.innerHTML)

    } else if(inputThirdQuestion.value == "Resposta") {
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        thirdQuestion.style = "background-color: green;"
        console.log(inputFirstQuestion.innerHTML)

    } else if(inputFourthQuestion.value == "Resposta") {
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        fourthQuestion.style = "background-color: green;" 
        console.log(inputFirstQuestion.innerHTML)

    } else if(inputFifthQuestion.value == "Resposta") {
        console.log("entrooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        fifthQuestion.style = "background-color: green;"
        console.log(inputFirstQuestion.innerHTML)
    }  */

/* }) */




nextQuestion.addEventListener('click', dados)