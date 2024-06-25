const { chromium } = require('playwright');

(async () => {
  const userDataDir = '/Users/brunosouza/Library/Application Support/Google/Chrome/Profile 6';

  const browser = await chromium.launchPersistentContext(userDataDir, { headless: false });
  const page = await browser.newPage();

  // Navega até o WhatsApp Web
  await page.goto('https://web.whatsapp.com/');

  // Aguarde o usuário fazer login manualmente e o QR Code ser escaneado

  // Aguarde um pouco para observar o resultado antes de prosseguir
  await page.waitForTimeout(15000);

  // Envia uma mensagem "sair" para o número especificado
  await sendMessage(page, '+55 48 3181-0028', 'sair');

  // Aguarde um pouco antes de enviar a próxima mensagem
  await page.waitForTimeout(5000);

  // Envia uma mensagem "oi" para o número especificado
  await sendMessage(page, '+55 48 3181-0028', 'oi');

  // Aguarde um pouco para observar o resultado antes de fechar a página
  await page.waitForTimeout(5000);

  // Fecha a página
  await page.close();

  // Feche o navegador apenas quando necessário
  await browser.close();
})();

async function sendMessage(page, phoneNumber, message) {
  // Encontre a caixa de entrada de chat usando um seletor mais específico do WhatsApp Web
  const inputSelector = 'div[role="combobox"][aria-label="Pesquisar ou começar uma nova conversa"]';
  await page.waitForSelector(inputSelector);
  await page.click(inputSelector);

  // Insira o número de telefone
  await page.type(inputSelector, phoneNumber);

  // Aguarde até que o seletor específico do chat esteja visível
  const chatSelector = `div[title="${phoneNumber}"]`;
  await page.waitForSelector(chatSelector, { visible: true });

  // Abra o chat
  await page.click(chatSelector);

  // Insira a mensagem
  const messageInputSelector = 'div[data-tab="6"] div[contenteditable="true"]';
  await page.waitForSelector(messageInputSelector);
  await page.type(messageInputSelector, message);

  // Aguarde um pouco antes de enviar a mensagem
  await page.waitForTimeout(1000);

  // Pressione Enter para enviar a mensagem
  await page.keyboard.press('Enter');
}
