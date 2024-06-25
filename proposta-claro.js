const { chromium } = require('playwright');

// Função para enviar mensagens para um contato específico
async function sendMessagesToContact(messages, cpf, delay) {
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
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).fill('Confia.aí - Claro');
  await wait(7000); // Espera para garantir que os resultados da pesquisa sejam carregados
  await page.getByRole('gridcell', { name: 'Confia.aí - Claro' }).click();
  await wait(7000); // Espera para garantir que o chat com o contato esteja aberto

  // Função interna para enviar uma mensagem
  async function sendMessage(message) {
    // Espera até que o diálogo do WhatsApp esteja pronto para receber uma entrada
   // await page.waitForSelector('div[contenteditable="true"][data-tab="1"]');
      
    // Preenche a mensagem
    await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill(message);
      
    // Pressiona a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
      
    // Para todas as outras mensagens, aguarde o tempo fornecido pelo usuário antes de enviar a próxima
    await wait(delay);
  }

  let simCount = 0; // Contador para contar os "Sim" enviados
  for (let i = 0; i < messages.length; i++) {
    await sendMessage(messages[i]);
    if (messages[i] === 'Sim') {
      simCount++;
      if (simCount === 5) {
        await wait(60000); // Espera 1 minuto após o envio do quinto "Sim"
        simCount = 0; // Reseta o contador
      }
    }
    if (messages[i] === cpf) {
      await wait(60000); // Espera 1 minuto após o envio do CPF
    }
  }

  console.log('Mensagens enviadas com sucesso.');
  // await browser.close();
}

// Função auxiliar para aguardar um determinado número de milissegundos
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

  if (option === '1') {
    // Proposta completa
    let cpf = prompt('Digite o CPF: '); // Solicitando o CPF para Proposta completa
    let delay = parseInt(prompt('Digite o tempo de espera entre mensagens (em milissegundos): ')); // Solicitando o tempo de espera entre mensagens
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
    await sendMessagesToContact(messages, cpf, delay);
  } else if (option === '2') {
    console.log('Essa opção ainda não está implementada.');
  } else if (option === '3') {
    console.log('Essa opção ainda não está implementada.');
  } else {
    console.log('Opção inválida.');
  }
}

main().catch((error) => {
  console.error('Ocorreu um erro:', error.message);
});
