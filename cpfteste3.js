const { chromium } = require('playwright');

async function sendMessagesToContact(messages, cpf, delay) {
    const browser = await chromium.launchPersistentContext(
        '/Users/brunosouza/Library/Application Support/Google/Chrome/Profile 1',
        { headless: false }
    );
    const page = await browser.newPage();

    await page.goto('https://web.whatsapp.com/');

    await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).getByRole('paragraph').click();
    await wait(7000);
    await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).fill('Confia.aí - Smarters');
    await wait(7000);
    await page.getByRole('gridcell', { name: 'Confia.aí - Smarters' }).click();
    await wait(7000);

    async function sendMessage(message) {
        await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill(message);
        await page.keyboard.press('Enter');
        await wait(delay);
    }
    let simSent = false; // Flag para indicar se o "Sim" já foi enviado
    for (let i = 0; i < messages.length; i++) {
        await sendMessage(messages[i]);
        if (messages[i] === 'Sim') {
            simSent = true;
        }
        if (simSent && messages[i] === 'contratar') {
            // Se o "Sim" já foi enviado e a mensagem atual é "contratar", esperar 2 minutos
            await wait(120000);
        }
    }

    console.log('TESTE PASSOU! OK');
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const prompt = require('prompt-sync')();
    console.log('Selecione o fluxo:');
    console.log('1. Proposta completa');
    console.log('2. Simulação');
    console.log('3. Rodar até uma linha específica');

    const option = prompt('Digite o número do fluxo desejado: ');

    let cpf;
    switch (option) {
        case '1':
            console.log('Selecione o CPF:');
            console.log('1. Vitor - 80796915091');
            console.log('2. Adri - 76706001015');
            console.log('3. Bruno - 04783428964');
            console.log('4. Sierra - 29759500809');
            console.log('5. Outro CPF');
            const cpfOptionProposta = prompt('Digite o número correspondente ao CPF desejado: ');
            switch (cpfOptionProposta) {
                case '1':
                    cpf = '80796915091';
                    break;
                case '2':
                    cpf = '76706001015';
                    break;
                case '3':
                    cpf = '04783428964';
                    break;
                case '4':
                    cpf = '29759500809';
                    break;
                case '5':
                    cpf = prompt('Digite o CPF desejado: ');
                    break;
                default:
                    console.log('Opção inválida.');
                    return main(); // Solicitar novamente a seleção de fluxo
            }
            const messagesProposta = await propostaCompleta(cpf);
            // Definir o tempo de espera
            const delayProposta = parseInt(prompt('Digite o tempo de espera entre mensagens (em segundos): ')) * 1000;
            await sendMessagesToContact(messagesProposta, cpf, delayProposta);
            break;
        case '2':
            console.log('Selecione o CPF:');
            console.log('1. Vitor - 80796915091');
            console.log('2. Adri - 76706001015');
            console.log('3. Bruno - 04783428964');
            console.log('4. Sierra - 29759500809');
            console.log('5. Outro CPF');
            const cpfOptionSimulacao = prompt('Digite o número correspondente ao CPF desejado: ');
            switch (cpfOptionSimulacao) {
                case '1':
                    cpf = '80796915091';
                    break;
                case '2':
                    cpf = '76706001015';
                    break;
                case '3':
                    cpf = '04783428964';
                    break;
                case '4':
                    cpf = '29759500809';
                    break;
                case '5':
                    cpf = prompt('Digite o CPF desejado: ');
                    break;
                default:
                    console.log('Opção inválida.');
                    return main(); // Solicitar novamente a seleção de fluxo
            }
            const messagesSimulacao = await simulacao(cpf);
            // Definir o tempo de espera
            const delaySimulacao = parseInt(prompt('Digite o tempo de espera entre mensagens (em segundos): ')) * 1000;
            await sendMessagesToContact(messagesSimulacao, cpf, delaySimulacao);
            break;
        case '3':
            console.log('Selecione o CPF:');
            console.log('1. Vitor - 80796915091');
            console.log('2. Adri - 76706001015');
            console.log('3. Bruno - 04783428964');
            console.log('4. Sierra - 29759500809');
            console.log('5. Outro CPF');
            const cpfOptionRodar = prompt('Digite o número correspondente ao CPF desejado: ');
            switch (cpfOptionRodar) {
                case '1':
                    cpf = '80796915091';
                    break;
                case '2':
                    cpf = '76706001015';
                    break;
                case '3':
                    cpf = '04783428964';
                    break;
                case '4':
                    cpf = '29759500809';
                    break;
                case '5':
                    cpf = prompt('Digite o CPF desejado: ');
                    break;
                default:
                    console.log('Opção inválida.');
                    return main(); 
            }
            const lineIndex = parseInt(prompt('Digite o índice da linha até onde deseja executar: '));
            const messagesRodarLinhaEspecifica = await rodarAteLinhaEspecifica(cpf, lineIndex);
        
            const delayRodarLinhaEspecifica = parseInt(prompt('Digite o tempo de espera entre mensagens (em segundos): ')) * 1000;
            await sendMessagesToContact(messagesRodarLinhaEspecifica, cpf, delayRodarLinhaEspecifica);
            break;
        default:
            console.log('Opção inválida.');
            return main(); 
    }
}

async function propostaCompleta(cpf) {
    const messages = [
        'sair',                // 1
        'oi',                  // 2
        'Saque Aniversario',   // 3
        '1000',                // 4
        'Sim',                 // 5
        'Sim',                 // 6
        'Sim',                 // 7
        'Sim',                 // 8
        //'Sim',               // 9
        'Concordo',            // 10
       // 'trocar',              // 11
        cpf,                   // 12
        'Sim',                 // 13
        'teste@teste.com',  // 14
        //'Sim',              // 15
        //'alterar',          // 16
        //'alterar_valor',    // 17
        //'460',              // 18
        'contratar',           // 19
        '88101250',            // 20
        '767',
        'casa2',               // 21
        'solteiro',            // 22
        'Superior Comp',       // 23
        'Até 1.499',           // 24
        '2670831',             // 25
        'Detran',              // 26
        'SP',                  // 27
        '01/10/2014',          // 28
        'Estão Corretos',      // 29
        'Banco do Brasil',     // 30
        'Sim',                 // 31
        '2638',                // 32
        '21017-0',             // 33
        'Sim',                 // 34
    ];
    return messages;
}

async function simulacao(cpf) {
    const messages = [
        'sair',
        'oi',
        'Saque Aniversario',
        '1000',
        'Sim',
        'Sim',
        'Sim',
        'Sim',
        'Concordo',
        'trocar',
        cpf,
        'Sim', // Se necessário, adicione mais mensagens específicas da simulação aqui
    ];
    return messages;
}

async function rodarAteLinhaEspecifica(cpf, lineIndex) {
    const messages = [
        'sair',                // 1
        'oi',                  // 2
        'Saque Aniversario',   // 3
        '1000',                // 4
        'Sim',                 // 5
        'Sim',                 // 6
        'Sim',                 // 7
        'Sim',                 // 8
        //'Sim',               // 9
        'Concordo',            // 10
        'trocar',              // 11
        cpf,                   // 12
        'Sim',                 // 13
        //'teste@teste.com',  // 14
        //'Sim',              // 15
        //'alterar',          // 16
        //'alterar_valor',    // 17
        //'460',              // 18
        'contratar',           // 19
        '88101250',            // 20
        '767',                  //35
        'casa2',               // 21
        'solteiro',            // 22
        'Superior Comp',       // 23
        'Até 1.499',           // 24
        '2670831',             // 25
        'Detran',              // 26
        'SC',                  // 27
        '01/10/2014',          // 28
        'Estão Corretos',      // 29
        'Banco do Brasil',     // 30
        'Sim',                 // 31
        '2638',                // 32
        '21017-0',             // 33
        'Sim',                 // 34
    ];
    return messages.slice(0, lineIndex);
}

main().catch((error) => {
    console.error('Ocorreu um erro:', error.message);
});
