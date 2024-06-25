const { chromium } = require('playwright');

// Marca o início da execução
const startTime = Date.now();

// Função auxiliar para aguardar um determinado número de milissegundos
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para enviar mensagens para um contato específico
async function sendMessagesToContact(messages) {
  // Inicia uma sessão do navegador com um perfil do Chrome existente
  const browser = await chromium.launchPersistentContext(
    '/Users/brunosouza/Library/Application Support/Google/Chrome/Profile 1', 
    { headless: false }
  );
  const page = await browser.newPage();
  
  // Navega até o WhatsApp Web
  await page.goto('https://web.whatsapp.com/');

  // Busca e seleciona o contato
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).click();
  await wait(5000); // Espera para garantir que a caixa de texto de pesquisa esteja pronta
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).fill('robo take');
  await wait(5000); // Espera para garantir que os resultados da pesquisa sejam carregados
  await page.getByRole('gridcell', { name: 'Robo Take' }).click();
  await wait(5000); // Espera para garantir que o chat com o contato esteja aberto

  // Função interna para enviar uma mensagem
  async function sendMessage(message) {
    await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill(message);
    await page.keyboard.press('Enter');
    // Se a mensagem atual for o número de telefone, espera 1 minuto antes de enviar a próxima
    if (message === '04783428964') {
      await wait(60000); // 1 minuto
      // Insere o clique no botão após enviar '04783428964'
     // await page.click("#app > div > span:nth-child(3) > div > div > div > div > div > div > div > div > div:nth-child(2) > div._ak72._ak73._ak7- > div._ak8l._ak8m > span > button");
      
      // Novas ações após enviar '04783428964'
      await page.getByRole('button', { name: 'list-msg-icon O que deseja' }).click();
      await page.getByText('2. Quero outro valor').click();
      await page.getByRole('button', { name: 'send' }).click();
      await wait(15000); // Espera antes de possivelmente enviar a próxima mensagem
    } else {
      // Para todas as outras mensagens, aguarde 30 segundos antes de enviar a próxima
      await wait(15000); // Espera antes de possivelmente enviar a próxima mensagem
    }
  }

  // Envia cada mensagem da lista
  for (const message of messages) {
    await sendMessage(message);
  }

  console.log('Mensagens enviadas com sucesso.');

  // Fecha o navegador após a execução do script (opcional)
  // await browser.close();
}

// Lista de mensagens a serem enviadas
const messages = [
  'sair',
  'oi',
  '4',
  '4',
  '1',
  'sim',
  'sim',
  '04783428964',
  '200'
];

// Chama a função para enviar as mensagens
sendMessagesToContact(messages).catch(console.error);
