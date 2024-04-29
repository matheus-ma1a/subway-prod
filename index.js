// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

const canal = '120363230220521692@g.us'

const horariosDesejados = [

    '08:00', '09:00', '10:00', '11:00',

    '12:00', '14:00', '16:00', '17:00',

    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
];

const pessoasValores = [
    { nome: 'João', valor: 'R$ 50,00' },
    { nome: 'Maria', valor: 'R$ 75,00' },
    { nome: 'Pedro', valor: 'R$ 32,50' },
    { nome: 'Ana', valor: 'R$ 60,00' },
    { nome: 'Carlos', valor: 'R$ 45,80' },
    { nome: 'Camila', valor: 'R$ 90,25' },
    { nome: 'Lucas', valor: 'R$ 55,30' },
    { nome: 'Juliana', valor: 'R$ 42,10' },
    { nome: 'Rafael', valor: 'R$ 87,60' },
    { nome: 'Larissa', valor: 'R$ 70,20' },
    { nome: 'Thiago', valor: 'R$ 65,40' },
    { nome: 'Letícia', valor: 'R$ 80,70' },
    { nome: 'Marcelo', valor: 'R$ 38,90' },
    { nome: 'Fernanda', valor: 'R$ 95,10' },
    { nome: 'Gabriel', valor: 'R$ 52,80' },
    { nome: 'Isabela', valor: 'R$ 82,50' },
    { nome: 'André', valor: 'R$ 47,60' },
    { nome: 'Beatriz', valor: 'R$ 72,80' },
    { nome: 'Felipe', valor: 'R$ 67,30' },
    { nome: 'Giovanna', valor: 'R$ 88,20' },
    { nome: 'Bruno', valor: 'R$ 54,20' },
    { nome: 'Natália', valor: 'R$ 48,50' },
    { nome: 'Eduardo', valor: 'R$ 62,10' },
    { nome: 'Carolina', valor: 'R$ 40,60' },
    { nome: 'Vinícius', valor: 'R$ 78,90' },
    { nome: 'Aline', valor: 'R$ 85,70' },
    { nome: 'Gustavo', valor: 'R$ 43,20' },
    { nome: 'Mariana', valor: 'R$ 58,40' },
    { nome: 'Daniel', valor: 'R$ 68,90' },
    { nome: 'Vanessa', valor: 'R$ 83,60' },
    { nome: 'Lucas', valor: 'R$ 46,30' },
    { nome: 'Luana', valor: 'R$ 92,80' },
    { nome: 'Matheus', valor: 'R$ 57,50' },
    { nome: 'Patrícia', valor: 'R$ 36,20' },
    { nome: 'Diego', valor: 'R$ 74,30' },
    { nome: 'Débora', valor: 'R$ 98,40' },
    { nome: 'Victor', valor: 'R$ 51,10' },
    { nome: 'Jéssica', valor: 'R$ 61,80' },
    { nome: 'Rodrigo', valor: 'R$ 77,20' },
    { nome: 'Renata', valor: 'R$ 49,70' },
    { nome: 'Caio', valor: 'R$ 89,90' },
    { nome: 'Amanda', valor: 'R$ 64,10' },
    { nome: 'José', valor: 'R$ 39,80' },
    { nome: 'Laura', valor: 'R$ 56,70' },
    { nome: 'Roberto', valor: 'R$ 71,40' },
    { nome: 'Bianca', valor: 'R$ 86,30' },
    { nome: 'Leandro', valor: 'R$ 53,60' },
    { nome: 'Marina', valor: 'R$ 79,80' },
    { nome: 'Fabrício', valor: 'R$ 44,90' },
    { nome: 'Fernanda', valor: 'R$ 69,20' },
    // Mais 50 opções adicionadas abaixo
    { nome: 'Renato', valor: 'R$ 69,40' },
    { nome: 'Gabriela', valor: 'R$ 92,10' },
    { nome: 'Ricardo', valor: 'R$ 48,30' },
    { nome: 'Lívia', valor: 'R$ 63,50' },
    { nome: 'Guilherme', valor: 'R$ 77,90' },
    { nome: 'Roberta', valor: 'R$ 55,20' },
    { nome: 'Pedro', valor: 'R$ 71,80' },
    { nome: 'Carla', valor: 'R$ 39,60' },
    { nome: 'Felipe', valor: 'R$ 64,20' },
    { nome: 'Ana Clara', valor: 'R$ 87,40' },
    { nome: 'Rita', valor: 'R$ 50,80' },
    { nome: 'Gustavo', valor: 'R$ 72,10' },
    { nome: 'Luiz', valor: 'R$ 60,30' },
    { nome: 'Camila', valor: 'R$ 43,90' },
    { nome: 'Fábio', valor: 'R$ 84,60' },
    { nome: 'Patrícia', valor: 'R$ 36,70' },
    { nome: 'Caio', valor: 'R$ 53,20' },
    { nome: 'Amanda', valor: 'R$ 78,10' },
    { nome: 'Bruna', valor: 'R$ 95,40' },
    { nome: 'Marcela', valor: 'R$ 48,80' },
    { nome: 'Gustavo', valor: 'R$ 61,90' },
    { nome: 'Rafaela', valor: 'R$ 73,20' },
    { nome: 'Matheus', valor: 'R$ 86,80' },
    { nome: 'Leandro', valor: 'R$ 58,60' },
    { nome: 'Carolina', valor: 'R$ 69,70' },
    { nome: 'Diego', valor: 'R$ 40,50' },
]

venom
    .create({
        session: 'session-name' //name of session
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });


function start(client) {
    // client.onMessage((message) => {
    //     if (message.body === 'Hi') {
    //         client
    //             .sendText(message.from, 'Welcome Venom 🕷')
    //             .then((result) => {
    //                 console.log('Result: ', result); //return object success
    //             })
    //             .catch((erro) => {
    //                 console.error('Error when sending: ', erro); //return object error
    //             });
    //     }
    // });
    sinal()

    function sinal() {

        setTimeout(() => {
            client.sendImage(canal,
                './imagemdosinal.jpeg',
                'image-name',
                `
🚉 VIAGEM CONFIRMADA 🚉

🗺️ESTAÇÃO: JOGOS RETRÔ 🏄
🗺️LINK DA ESTAÇÃO: https://jogosretro.site/game/subway-surfers/?test=1&r=zjbdmotv

🎯 ASSERTIVIDADE: ${gerarNumeroAleatorio(98, 96)}%
🚥 SUBWAY SURF 🚥

⏰ N° Tentativas: 4
⏰ Válido de: ${horaMinutosAtual(0)} até ${horaMinutosAtual(5)} (Horário de Brasília)

🔰Jogue dentro do Horário Pagante
🎰Aposte de acordo com sua Banca
👮🏻‍♂️ Fuja do guarda
🚂 Desvie de até 6 trens
🚧 Desvie de até 8 placas
🪙 Resgate as Moedas

🏁🏁🏁🏁🏁🏁🏁🏁🏁

🚨 *EXCLUSIVO PARA A PLATAFORMA ABAIXO!* ⬇️
https://jogosretro.site/game/subway-surfers/?test=1&r=zjbdmotv
    
            `)
        },)

        setTimeout(() => {
            client
                .sendImage(
                    canal,
                    './Captura de tela 2024-04-09 112632.png',
                    'image-name',
                    `
🚨CONTINUEM MANDANDO SEUS RESULTADOS, FICAMOS MUITOS FELIZES EM AJUDAR VOCÊS E ISSO NOS MOTIVA CADA VEZ MAIS!!


SEGUINDO A RISCA NOSSA ESTRATÉGIA  E SUA GESTÃO DE BANCA A FORRA É CERTA 🤑🤑

🏁LINK DA ESTAÇÃO: https://jogosretro.site/game/subway-surfers/?test=1&r=zjbdmotv
              `
                )
        }, 200000)

        setTimeout(() => {
            client.sendText(canal, `
🏆 BEM VINDOS AO NOSSO GRUPO VIP 🏆

O jogo SUBWAY SURFERS é sobre habilidade, teste a sua agora com o novo sistema desenvolvido pelo nosso expert.

✅ Velocidade Realista
✅ Saques sem taxa
✅ Sem barra de saque

Para ativar sua conta com todos esses bônus você precisa cadastrar pelo link abaixo e efetuar um depósito acima de R$ 22,46 (Depósitos sempre com valores quebrados exemplo 0,46 centavos).

🚉LINK DA ESTAÇÃO: https://jogosretro.site/?r=zjbdmotv
            `)
        }, 30000);

        setTimeout(() => {
            client.sendText(canal, `
⚠️ ATENÇÃO!! FIQUE ATENTO AOS SINAIS ⚠️

Eles são disparados a qualquer momento quando nosso expert identifica uma entrada e não sabemos quando será o próximo. Então se você ainda não aproveitou a oportunidade está indo embora, não perca tempo, seja mais rápido que o guardinha! 👮

1️⃣ CRIE SUA CONTA ⬇️
🚉LINK DA ESTAÇÃO: https://jogosretro.site/?r=zjbdmotv

2️⃣ FAÇA UM DEPÓSITO ACIMA DE R$ 22,46 (Sempre com valor quebrado para ativar a conta e o sistma) 

3️⃣AGUARDE A ENTRADA E SEJA FELIZ 🏁🏆

            `)
        }, 500000);

    }

    function provasSociais() {
        client.sendText(canal, `
🏆 TOP GANHADORES DO DIA: 🏆
🥇 ${nomeValorAleatorio(pessoasValores).nome} - ${nomeValorAleatorio(pessoasValores).valor}
🥇 ${nomeValorAleatorio(pessoasValores).nome} - ${nomeValorAleatorio(pessoasValores).valor}
🥇 ${nomeValorAleatorio(pessoasValores).nome} - ${nomeValorAleatorio(pessoasValores).valor}
🥇 ${nomeValorAleatorio(pessoasValores).nome} - ${nomeValorAleatorio(pessoasValores).valor}
        `)
    }

    setInterval(() => {
        console.log(horaMinutosAtual(0));
        const horaAtual = horaMinutosAtual(0);
        if (horariosDesejados.includes(horaAtual)) {
            sinal();
        }
    }, 60000);

    setInterval(() => {
        console.log(horaMinutosAtual(0));
        const horaAtual = horaMinutosAtual(0);
        if (horaAtual === '18:00') {
            provasSociais();
        }
    }, 60000);

}


function horaMinutosAtual(add) {
    const now = new Date();
    const expiry = new Date(now.getTime() + add * 60 * 1000);
    const hours = String(expiry.getHours()).padStart(2, '0');
    const minutes = String(expiry.getMinutes()).padStart(2, '0');

    return hours + ':' + minutes

}

function gerarNumeroAleatorio(max, min) {

    const numeroAleatorio = Math.random();
    const numeroNoIntervalo = numeroAleatorio * (max - min) + min;
    const numeroFinal = Math.floor(numeroNoIntervalo);

    return numeroFinal;
}

function nomeValorAleatorio(arr) {
    // Gerar um índice aleatório dentro do comprimento do array
    const indiceAleatorio = Math.floor(Math.random() * arr.length);

    // Obter o objeto com base no índice aleatório
    const pessoa = arr[indiceAleatorio];

    // Retornar o nome e valor associado
    return { nome: pessoa.nome, valor: pessoa.valor };
}



