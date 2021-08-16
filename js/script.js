//variaveis
let titulo = document.querySelector(`#titulo`)
let paragrafo = document.querySelector(`p`)
let botao = document.querySelector(`.button`)
let inputs = document.querySelector(`.respostas`)
let n = 0;
let score = 0;
//perguntas
let perguntas = 
[ 
    pergunta1 = `Das 5 skins ultimates, qual delas custa menos?`
    ,
    pergunta2 = `Qual o título secundário de Lux?`
    ,
    pergunta3 = `"A Rosa Negra irá desabrochar novamente"</br>
    De quem é a frase acima?`
    ,
    pergunta4 = `Qual é o nome do dano que ignora todas as armaduras e resistência mágica em League of Legends?`
    ,
    pergunta5 = `Qual dos campeões abaixo tinha o conceito inicial de uma engenheira hextech chamada CeeCee, mas que sofreu mudanças em tudo, até no visual?`
    ,
    pergunta6 = `League of Legends foi inspirado em qual dos seguintes jogos / mods?`
    ,
    pergunta7 = `A imagem acima contém os itens: Capuz da Morte de Rabadon, Bastão das Eras, Tiamat, Hexdrinker, Pistola Laminar Hextec e uma Lâmina do Perseguidor. Verdadeiro ou falso?`
    ,
    pergunta8 = `Annie e Tibbers ganharam uma homenagem da Riot Games. Qual foi essa homenagem?`
    ,
    pergunta9 = `Qual campeão tem o maior HP no nível 1 sem itens, runas ou talentos?`
    ,
    pergunta10 = `Os efeitos sonoros de qual campeão foram feitos usando "comida de cachorro e feijão dentro de uma camisinha" que foi "arremessada contra a parede"?`
    ,
    pergunta11 = `No clipe de 'Get Jinxed', Jinx pode ser vista alçando voo com um monte de balões. Antes dela entrar em cena, um único balão na forma de outro campeão do LoL aparece. Quem é esse balão?`
    ,
    pergunta12 = `Tenho um Bastão das Eras (acumulado ao máximo), uma Hidra Titânica, e uma Armadura de Warmog, mas a vida bônus dos três itens é diminuída em 20%. Quanto de bônus de vida ainda sobra?`
    ,
    pergunta13 = `As armas de Jhin e Graves possuem sistema de recarregar. O tempo de recarregamento de Jhin é fixo, mas do Graves não, mas no menor ranking e sem itens, qual dos dois possui o tempo de recarregamento mais longo?`
    ,
    pergunta14 = `O que Volibear, Ezreal, Udyr e Zilean têm em comum?`
    ,
    pergunta15 = `Qual é o título de Camille?`
]
//respostas
let respostas =
[
    r1 = 
    [ 
        resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Lux Elementalista`
        ,
        resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Miss Fortune Vingadora Exocósmica`
        ,
        resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Ezreal Pulsefire`
        ,
        resposta4 = `</br><input class='opcao4' class='opcao'type="radio" name="input" id="input">Udyr Guardião Espiritual`
        ,
        resposta5 = `</br><input class='opcao5' type="radio" name="input" id="input">DJ Sona`
    ],
    r2 =
    [
        resposta1 = `<input class='opcao1' type="radio" name="input" id="input">A Dama da Luz`
        ,
        resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">A Maga Prismática`
        ,
        resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">A Feiticeira Iluminada`
        ,
        resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">O Farol de Demacia`
    ],
    r3 =
    [
        resposta1 = `<input class='opcao1' type="radio" name="input" id="input">LeBlanc`
        ,
        resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Shaco`
        ,
        resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Jhin`
        ,
        resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">Tahm Kench`
    ],
    r4 =
    [
        resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Dano Verdadeiro`
        ,
        resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Dano prenetrante`
        ,
        resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Dano Absoluto`
        ,
        resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">Dano Perfeito`
    ],
    r5 =
    [
        resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Braum`
        ,
        resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Ziggs`
        ,
        resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Orianna`
        ,
        resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">Tristana`
    ],
    r6 =
    [
        resposta1 = `<input class='opcao1' type="radio" name="input" id="input">WarCraft III`
        ,
        resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Dota 2`
        ,
        resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Defesa dos antigos`
        ,
        resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">Heróis de Newerth`
    ],
    r7 =
    [
        resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Verdadeiro`
        ,
        resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Falso`
    ],
    r8 = 
    [ 
    resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Tem uma estátua enorme dos dois no escritório principal da Riot`
    ,
    resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Eles estrelam uma série de quadrinhos`
    ,
    resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Um de seus funcionários nomeou seus filhos homenageando os dois`
    ,
    resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">A dupla está escondida em toda a comunicação da empresa`
    ],
    r9 =
    [
    resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Trundle`
    ,
    resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Tryndamere`
    ,
    resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Garen`
    ,
    resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">Alistar`
    ],
    r10 =
    [
    resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Illaoi`
    ,
    resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Zac`
    ,
    resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Orianna`
    ,
    resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">Tahm Kench`
    ],
    r11 =
    [
    resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Ziggs`
    ,
    resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Gnar`
    ,
    resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Corki`
    ,
    resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">Teemo`
    ],
    r12 =
    [
    resposta1 = `<input class='opcao1' type="radio" name="input" id="input">1.400`
    ,
    resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">1.360`
    ,
    resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">1.480`
    ,
    resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">1.440`
    ],
    r13 =
    [
    resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Graves`
    ,
    resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Jhin`
    ,
    resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Nenhum dos dois`
    ],
    r14 =
    [
    resposta1 = `<input class='opcao1' type="radio" name="input" id="input">Cada um tem o nome de um funcionário da Riot.`
    ,
    resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">Todos eles foram desativados em algum momento durante o LCS de 2016.`
    ,
    resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">Todos eles possuem habilidades que aumentam a velocidade de movimento.`
    ,
    resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">Todos os quatro desprezam Urgot.`
    ],
    r15 =
    [
    resposta1 = `<input class='opcao1' type="radio" name="input" id="input">A Salvadora de Piltover`
    ,
    resposta2 = `</br> <input class='opcao2' type="radio" name="input" id="input">A Justiceira Absoluta`
    ,
    resposta3 = `</br><input class='opcao3' type="radio" name="input" id="input">A Lâmina Silenciosa`
    ,
    resposta4 = `</br><input class='opcao4' type="radio" name="input" id="input">A Sombra de Aço`
    ]
]


//função do botão
function Começar()
{
    ConferirResposta()
    let sco = document.querySelector('#score')
    let res = document.querySelector('.respostas')
    res.style.display='block'
    let titulo = document.querySelector('#titulo')
    titulo.innerHTML = ''
    sco.innerHTML = `<h2 class='cor'>Score:${score}</h2>`
    if (n == respostas.length)
    {
        botao.innerHTML = `<p onclick="acabou()">Finalizar</p>`
        n++
    }
    else if (n < respostas.length)
    {
        let p = document.querySelector('#premio')
        p.innerHTML = ''
        botao.innerHTML = "<p>Proximo</p>"
        paragrafo.innerHTML = perguntas[n]
        inputs.innerHTML = respostas[n]
        
        n++
        if (n == 7)
        {
            let img = document.querySelector(`.imagem`)
            img.innerHTML = `<img src="images/itens.jpg" alt="itens">`
        }
        else
        {
            let img = document.querySelector(`.imagem`)
            img.innerHTML = ``
        }
    }
    else 
    {
        acabou()
    }
}
function acabou()
{
    //ConferirResposta()
    let paragrafo2 = document.querySelector(`.paragrafo`)
    let botao2 = document.querySelector(`#button`)
    let titulo2 = document.querySelector(`#titulo`)
    let img = document.querySelector(`.imagem`)

    img.innerHTML = ``
    inputs.innerHTML = ``
    titulo2.innerHTML = "Muito obrigado por participar!"
    paragrafo2.innerHTML = `Sua pontuação foi de <div class="cor"><strong>${score}</strong> pontos</div>, cada pergunta certa te deu 1 ponto!`
    botao2.innerHTML = `<p onclick="Locationreload()">Refazer o Quiz</p>`
    cor = document.querySelector('.cor')
    if (score >= 10)
    {
        cor.style.color="green"
        let p = document.querySelector('#premio')
        p.innerHTML = `<a href="certificate.html"><img src="images/vcfoda.jpg" alt="você é foda" style="width: 200px;"></a> </br>Parabéns, Clique na imagem para acessar seu premio!!`
    }
    else if (score >= 5)
    {
        cor.style.color="yellow"
        let premio = document.querySelector('#premio')
        premio.innerHTML = `<img src="images/quase.jpg" alt="você é foda" style="width: 200px;"> </br>Você quase conseguiu o premio!`
    }
    else
    {
        let premio = document.querySelector('#premio')
        premio.innerHTML = `<img src="images/errou.jpg" alt="você é foda" style="width: 200px;"> </br>Você nem joga lol né KKKKKK`
        cor.style.color="red"
    }
}
function ConferirResposta() 
{
    primeira = document.querySelector('.opcao1')
    segunda = document.querySelector('.opcao2')
    terceira = document.querySelector('.opcao3')
    quarta = document.querySelector('.opcao4')
    quinta = document.querySelector('.opcao5')
    
    if (n == 1 && segunda.checked)
    {
        score++
    }
    else if (n == 2 && primeira.checked)
    {
        score++
    }
    else if (n == 3 && primeira.checked)
    {
        score++
    }
    else if (n == 4 && primeira.checked)
    {
        score++
    }
    else if (n == 5 && primeira.checked)
    {
        score++
    }
    else if (n == 6 && terceira.checked)
    {
        score++
    }
    else if (n == 7 && segunda.checked)
    {
        score++
    }
    else if (n == 8 && primeira.checked)
    {
        score++
    }
    else if (n == 9 && segunda.checked)
    {
        score++
    }
    else if (n == 10 && segunda.checked)
    {
        score++
    }
    else if (n == 11 && primeira.checked)
    {
        score++
    }
    else if (n == 12 && primeira.checked)
    {
        score++
    }
    else if (n == 13 && segunda.checked)
    {
        score++
    }
    else if (n == 14 && primeira.checked)
    {
        score++
    }
    else if (n == 15 && terceira.checked)
    {
        score++
    }
}
function Locationreload()
{
    document.location.reload(true);
}
