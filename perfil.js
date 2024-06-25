const browser = await chromium.launch();
const contexts = await browser.contexts();
for (const context of contexts) {
  console.log(context.profile().id());
}

await browser.close();