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

  let lastSimTime = 0;
  for (let i = 0; i < messages.length; i++) {
    await sendMessage(messages[i]);
    if (messages[i] === 'Sim') {
      const currentTime = Date.now();
      if (currentTime - lastSimTime >= 60000) {
        lastSimTime = currentTime;
      }
    }
    if (messages[i] === cpf || (messages[i] === 'contratar' && Date.now() - lastSimTime >= 60000)) {
      await wait(60000);
    }
  }

  console.log('Mensagens enviadas com sucesso.');
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fluxoSimulacao(cpf) {
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
    'Sim',
    'contratar',
    '88101250',
    'casa2',
    'solteiro',
    'Superior Comp',
    'Até 1.499',
    '2670831',
    'Detran',
    'SC',
    '012014',
    'Estão Corretos',
    'Banco do Brasil',
    'Sim',
    '2638',
    '21017-0',
    'Sim',
  ];

  return messages;
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
      const cpfOption = prompt('Digite o número correspondente ao CPF desejado: ');
      switch (cpfOption) {
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
          return;
      }
      break;
    case '2':
      cpf = prompt('Digite o CPF para a Simulação: ');
      break;
    case '3':
      return; // Implementar lógica para rodar até uma linha específica
    default:
      console.log('Opção inválida.');
      return;
  }

  const delay = parseInt(prompt('Digite o tempo de espera entre mensagens (em milissegundos): '));

  const messages = await fluxoSimulacao(cpf);
  await sendMessagesToContact(messages, cpf, delay);
}

main().catch((error) => {
  console.error('Ocorreu um erro:', error.message);
});
