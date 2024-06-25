const playwright = require('playwright');
const { chromium } = playwright;

const userDataDir = './user-data-dir'; // Replace with your desired directory

const timeout = 40000; // Tempo de espera em milissegundos

(async () => {
  try {
    console.log('Abrindo o navegador...');
    const browser = await chromium.launchPersistentContext(userDataDir, { headless: true });
    console.log('Navegador aberto.');

    const page = await browser.newPage();

    console.log('Navegando para o WhatsApp Web...');
    await page.goto('https://web.whatsapp.com/');
    console.log('Página carregada.');

    console.log('Aguardando login manual e escaneamento do QR Code...');
    await page.waitForTimeout(timeout);

    // Execute outras ações, se necessário, para interagir com a página

    console.log('Fechando a página...');
    await page.close();
    console.log('Página fechada.');

    console.log('Fechando o navegador...');
    await browser.close();
    console.log('Navegador fechado.');
  } catch (error) {
    console.error(error);
  }
})();