const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ headless: false }); // Abre o navegador de forma visível
  const page = await browser.newPage(); // Abre uma nova página

  // Navega até o link fornecido
  await page.goto('https://api.whatsapp.com/send/?phone=551135061662&text=CONFIA.AI+Envie+essa+mensagem+para+iniciar+sua+simula%C3%A7%C3%A3o+online.+%7C+ID_6%4011361&type=phone_number&app_absent=0');
  await wait(7000);
  
  // Clica no link "Iniciar conversa" usando o seletor fornecido
  await page.click('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > section > div > div > div > div:nth-child(2) > div:nth-child(1) > a > span');
  
  await wait(7000);
  
  // Clica no link "usar o WhatsApp Web" usando o seletor fornecido
  await page.click('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > section > div > div > div > div:nth-child(2) > div:nth-child(1) > a > span');
  
  await wait(7000);
  await page.goto('https://web.whatsapp.com/');
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).getByRole('paragraph').click();
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('oi');

  // Pressiona Enter para enviar a mensagem
  await page.keyboard.press('Enter');

  // Espera 5 segundos para garantir que a mensagem seja enviada
  await page.waitForTimeout(5000);
  
  // Feche o navegador quando terminar
  await browser.close();
}







// Chame a função principal para iniciar o código
main().catch((error) => console.error('Ocorreu um erro:', error));