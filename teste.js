const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launchPersistentContext('/Users/brunosouza/Library/Application Support/Google/Chrome/Profile 1', { headless: false });
  const page = await browser.newPage();

  await page.goto('https://web.whatsapp.com/');

  // Instruções para leitura do código QR e login manual
  console.log("Aguarde a leitura do código QR e faça o login no WhatsApp Web.");

  // Aguarda o login manual
  await page.waitForSelector('css=._30529'); // Presuma que o login foi bem-sucedido se a lista de conversas aparecer

  // Envia mensagens a cada 5 segundos
  while (true) {
    try {
      // Sua lógica de envio de mensagens (adaptada do seu código)
      await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sua Mensagem Aqui');
      await page.keyboard.press('Enter');

      console.log("Mensagem enviada. Aguardando 5 segundos...");
      await page.waitForTimeout(5000); // Aguarde 5 segundos
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  }
})();
