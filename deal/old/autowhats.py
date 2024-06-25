from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Corrija o caminho do Firefox.
firefox_path = "/Applications/Firefox.app/Contents/MacOS/firefox"

# Inicialize o driver do Firefox.
driver = webdriver.Firefox(executable_path=firefox_path)

# URL do WhatsApp Web.
url_whats = "https://web.whatsapp.com"

# Abra o WhatsApp Web no Firefox.
driver.get(url_whats)

# Aguarde um pouco para o usuário escanear o código QR.
time.sleep(10)

# Encontre o campo de pesquisa.
search_box = driver.find_element_by_xpath('//div[contains(@class,"copyable-text selectable-text")]')
search_box.click()
search_box.send_keys("+55 11 3506-1620" + Keys.ENTER)

# Aguarde um pouco para carregar a conversa.
time.sleep(5)

# Encontre o campo de entrada de mensagem.
input_box = driver.find_element_by_xpath('//div[@class="_3FRCZ copyable-text selectable-text"][@contenteditable="true"][@data-tab="6"]')

# Digite a mensagem.
input_box.send_keys("Oi" + Keys.ENTER)

# Aguarde um pouco antes de fechar o navegador.
time.sleep(5)

# Feche o navegador.
driver.quit()
