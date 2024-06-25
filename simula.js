const { chromium } = require('playwright');

(async () => {
  try {
  const browser = await chromium.launchPersistentContext('/Users/brunosouza/Library/Application Support/Google/Chrome/Profile 1', { headless: false });
  
  const page = await browser.newPage();
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.goto('https://web.whatsapp.com/');
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).getByRole('paragraph').click();
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).fill('Smarter');
  await page.getByRole('gridcell', { name: 'Confia.aí - Smarters' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('sair');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  //await new Promise(resolve => setTimeout(resolve, 3000));
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('oi');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Saque Aniversario');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
 // await page.getByRole('button', { name: 'send' }).click();
 //await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
 await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('1000');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');

  //await page.getByRole('button', { name: 'Sim' }).click();
  //await page.getByRole('button', { name: 'Sim' }).nth(1).click();
  //await page.waitForSelector('[role="button"][title="Sim"]');
  //await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  //await page.waitForSelector('//*[@id="main"]/div[3]/div/div[2]/div[3]/div[11]/div/div/div[1]/div[3]/div[1]/div/span');
  await page.waitForTimeout(3000);
  //await page.click('//*[@id="main"]/div[3]/div/div[2]/div[3]/div[11]/div/div/div[1]/div[3]/div[1]/div/span');
  //await page.keyboard.press('Enter');
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
  //await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  //await page.waitForTimeout(3000);
  //await page.keyboard.press('Enter');
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Concordo');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('bruno.souza@o2obots.com');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
 // await page.waitForTimeout(40000);

  //await page.close();
    //await browser.close();

    // Mensagem de sucesso
  console.log('Simulação Automatizada OK');
  } catch (error) {
  //   Em caso de erro, exibe a mensagem de falha
    console.error('Falha na simulação:', error.message);
  }
})();