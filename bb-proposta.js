const { chromium } = require('playwright');

(async () => {
  const startTime = Date.now(); // Marca o início da execução
  try {
  const browser = await chromium.launchPersistentContext('/Users/brunosouza/Library/Application Support/Google/Chrome/Profile 1', { headless: false });
  
  const page = await browser.newPage();
  await new Promise(resolve => setTimeout(resolve, 5000));
  await page.goto('https://web.whatsapp.com/');
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).getByRole('paragraph').click();
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Caixa de texto de pesquisa' }).fill('Smarter');
  await page.getByRole('gridcell', { name: 'Confia.aí - Smarters' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('sair');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  //await new Promise(resolve => setTimeout(resolve, 5000));
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('oi');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Saque Aniversario');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
 // await page.getByRole('button', { name: 'send' }).click();
 //await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
 await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('1000');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');

  //await page.getByRole('button', { name: 'Sim' }).click();
  //await page.getByRole('button', { name: 'Sim' }).nth(1).click();
  //await page.waitForSelector('[role="button"][title="Sim"]');
  //await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  //await page.waitForSelector('//*[@id="main"]/div[3]/div/div[2]/div[3]/div[11]/div/div/div[1]/div[3]/div[1]/div/span');
  await page.waitForTimeout(5000);
  //await page.click('//*[@id="main"]/div[3]/div/div[2]/div[3]/div[11]/div/div/div[1]/div[3]/div[1]/div/span');
  //await page.keyboard.press('Enter');
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  //await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  //await page.waitForTimeout(5000);
  //await page.keyboard.press('Enter');
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Concordo');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('bruno.souza@o2obots.com');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(50000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('alterar');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('alterar_valor');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('160.00');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('contratar');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('88101250');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('casa 2');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('solteiro');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Superior Completo');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Até 1.499');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('2670831');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('SSP');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('SC');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('01/10/2014');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Estão Corretos');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('BB');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('2638');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('21017-0');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
 await page.getByRole('textbox', { name: 'Digite uma mensagem' }).fill('Sim');
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
  //const endTime = Date.now(); // Marca o fim da execução
  //  const totalTime = (endTime - startTime) / 1000; // Calcula o tempo total em segundos
  
 // await page.waitForTimeout(40000);

  //await page.close();
    //await browser.close();

    // Mensagem de sucesso
    const endTime = Date.now(); // Marca o fim da execução
    const executionTime = endTime - startTime; // Calcula o tempo total em milissegundos
    const minutes = Math.floor(executionTime / 60000); // Converte para minutos
    const seconds = ((executionTime % 60000) / 1000).toFixed(0); // Converte o restante para segundos

    console.log(`Simulação Automatizada OK. Tempo total de execução: ${minutes} minuto(s) e ${seconds} segundo(s).`);
  } catch (error) {
    console.error('Falha na simulação:', error.message);
  }
})();