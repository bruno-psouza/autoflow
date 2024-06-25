import re

# Definindo as regex para cada tipo de informação
regex_data = r"\d{2}/\d{2}/\d{4}"
regex_origem = r"(MQL|SQL|Oportunidade)"

# Contando os novos negócios por tipo
data_filtro = "07/03/2024"
contagem = {
    "MQL": 0,
    "SQL": 0,
    "Oportunidade": 0,
}
for linha in linhas:
    data = re.findall(regex_data, linha)
    origem = re.findall(regex_origem, linha)
    
    if len(data) > 0 and data[0] == data_filtro:
        if origem[0] in contagem:
            contagem[origem[0]] += 1

# Imprimindo a contagem de novos negócios
print(f"Novos negócios no dia {data_filtro}:")
for tipo, quantidade in contagem.items():
    print(f"{tipo}: {quantidade}")
