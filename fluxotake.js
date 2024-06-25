const { chromium } = require('playwright');
const startTime = Date.now(); // Marca o início da execução
// Função auxiliar para aguardar um determinado número de milissegundos
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  await wait(5000); // Espera para garantir que a caixa de texto de pesquisa esteja pronta para a entrada
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).fill('robo take');
  await wait(5000); // Espera para garantir que os resultados da pesquisa sejam carregados
  await page.getByRole('gridcell', { name: 'Robo Take'}).click();
  await wait(5000); // Espera para garantir que o chat com o contato esteja aberto

  // Função interna para enviar uma mensagem
  async function sendMessage(message) {
    await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill(message);
    await page.keyboard.press('Enter');
    // Se a mensagem atual for o e-mail, espera 2 minutos (120000 milissegundos) antes de enviar a próxima
    if (message === '04783428964') {
      await wait(60000); // 1 minutos
    } else {
      // Para todas as outras mensagens, aguarde 5 segundos antes de enviar a próxima
      await wait(15000);
      await page.keyboard.press('Enter');
      await wait(15000);
    
    }
  }



  for (const message of messages) {
    await sendMessage(message);
  }

  console.log('Mensagens enviadas com sucesso.');
  
  // await browser.close();
}

// Lista de mensagens a serem enviadas na jornada BMG correntista
const messages = [
    'sair',
    'oi',
   // 'Já Autorizei',
    '4',
    '4',
    '1',
    'sim',
    'sim',
    '047.834.289-64', // 34113130809 70 reais
   // 'Sim',  
   // 'Sim',


];

sendMessagesToContact(messages).catch((error) => {
  console.error('Ocorreu um erro:', error.message);
});
