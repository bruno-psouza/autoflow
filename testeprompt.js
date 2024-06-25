const { chromium } = require('playwright');

// Função para enviar mensagens para um contato específico
async function sendMessagesToContact(messages) {
  const browser = await chromium.launchPersistentContext(
    '/Users/brunosouza/Library/Application Support/Google/Chrome/Profile 1',
    { headless: false }
  );
  const page = await browser.newPage();

  // Navegue até o WhatsApp Web
  await page.goto('https://web.whatsapp.com/');

  // Busca e seleciona o contato
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).getByRole('paragraph').click();
  await wait(7000); // Espera para garantir que a caixa de texto de pesquisa esteja pronta para a entrada
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).fill('Smarter');
  await wait(7000); // Espera para garantir que os resultados da pesquisa sejam carregados
  await page.getByRole('gridcell', { name: 'Confia.aí - Smarters' }).click();
  await wait(7000); // Espera para garantir que o chat com o contato esteja aberto

  // Função interna para enviar uma mensagem
  async function sendMessage(message) {
    await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill(message);
    await page.keyboard.press('Enter');
    // Se a mensagem atual for o e-mail, espera 2 minutos (120000 milissegundos) antes de enviar a próxima
    if (message === 'bruno.souza@o2obots.com') {
      await wait(60000); // 1 minutos
    } else {
      // Para todas as outras mensagens, aguarde 5 segundos antes de enviar a próxima
      await wait(7000);
      await page.keyboard.press('Enter');
      await wait(7000);
    }
  }

  for (let i = 0; i < messages.length; i++) {
    await sendMessage(messages[i]);
  }

  console.log('Mensagens enviadas com sucesso.');
  // await browser.close();
}

// Função auxiliar para aguardar um determinado número de milissegundos
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para fluxo 2: simulação
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
    //'Sim',
    'Concordo',
    'trocar',
    cpf,                   // Substituído pelo CPF fornecido como argumento
    'Sim',
    //'teste@teste.com',
    //'Sim',
    // 'alterar',
    // 'alterar_valor',
    // '460',
    'contratar',
    '88101250',
    'casa2',
    'solteiro',
    'Superior Comp',
    'Até 1.499',
    '2670831',
    'Detran',
    'SC',
    '01/10/2014',
    'Estão Corretos',
    'Banco do Brasil',
    'Sim',
    '2638',
    '21017-0',
    'Sim',
  ];

  await sendMessagesToContact(messages);
}

// Função principal para seleção de fluxo
async function main() {
  const prompt = require('prompt-sync')();
  console.log('Selecione o fluxo:');
  console.log('1. Proposta completa');
  console.log('2. Simulação');
  console.log('3. Rodar até uma linha específica');

  const option = prompt('Digite o número do fluxo desejado: ');

  if (option === '1') {
    // Proposta completa
  } else if (option === '2') {
    const cpf = prompt('Digite o CPF: ');
    await fluxoSimulacao(cpf); // Chamando a função de simulação e passando o CPF digitado
  } else if (option === '3') {
    // Rodar até uma linha específica
  } else {
    console.log('Opção inválida.');
  }
}

main().catch((error) => {
  console.error('Ocorreu um erro:', error.message);
});
