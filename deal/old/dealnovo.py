from collections import defaultdict
import re

def processar_texto(texto):
    # Inicializa os dicionários para contagem por data e tipo, e para o total de cada tipo
    negocios_por_dia = defaultdict(lambda: defaultdict(int))
    total_por_tipo = defaultdict(int)
    
    # Expressão regular para capturar o tipo de contato e a última data
    regex_info = re.compile(r'(\bMQL\b|\bSQL\b|\bOportunidade\b|\bProposta\b|\bNegociação\b|\bIndefinido/Perdido\b|\bGanhou\b)')
    regex_data = re.compile(r'-\s*\n(\d{2}/\d{2}/\d{4})')
    
    # Divide o texto em registros, considerando cada bloco separado por linhas
    registros = texto.strip().split('\n\n')
    
    for registro in registros:
        tipo_contato_match = regex_info.search(registro)
        data_match = regex_data.search(registro)
        
        if tipo_contato_match and data_match:
            tipo_contato = tipo_contato_match.group(1)
            data = data_match.group(1)
            negocios_por_dia[data][tipo_contato] += 1
            total_por_tipo[tipo_contato] += 1

    return negocios_por_dia, total_por_tipo

# Substitua o texto abaixo com o seu conjunto de dados real
texto = """
Sergio Fachini Junior - - - SQL Saque Aniversário FGTS 09/03/2024 22:18 
- 
09/03/2024 22:19

Caio Matheus Ramos De Laia - - - SQL Saque Aniversário FGTS 09/03/2024 21:08 
- 
09/03/2024 21:09
"""

negocios_por_dia, total_por_tipo = processar_texto(texto)

# Imprime os resultados formatados por dia e o resumo total por tipo de contato
for dia, contagens in negocios_por_dia.items():
    total_por_dia = sum(contagens.values())
    print(f"Total de novos negócios no dia {dia}: {total_por_dia}")
    for tipo, quantidade in contagens.items():
        print(f"  {tipo}: {quantidade}")
print("\nResumo total por tipo de contato:")
for tipo, total in total_por_tipo.items():
    print(f"{tipo} total = {total}")
from collections import defaultdict
import re

def processar_texto(texto):
    # Inicializa os dicionários para contagem por data e tipo, e para o total de cada tipo
    negocios_por_dia = defaultdict(lambda: defaultdict(int))
    total_por_tipo = defaultdict(int)
    
    # Expressão regular para capturar o tipo de contato e a última data
    regex_info = re.compile(r'(\bMQL\b|\bSQL\b|\bOportunidade\b|\bProposta\b|\bNegociação\b|\bIndefinido/Perdido\b|\bGanhou\b)')
    regex_data = re.compile(r'-\s*\n(\d{2}/\d{2}/\d{4})')
    
    # Divide o texto em registros, considerando cada bloco separado por linhas
    registros = texto.strip().split('\n\n')
    
    for registro in registros:
        tipo_contato_match = regex_info.search(registro)
        data_match = regex_data.search(registro)
        
        if tipo_contato_match and data_match:
            tipo_contato = tipo_contato_match.group(1)
            data = data_match.group(1)
            negocios_por_dia[data][tipo_contato] += 1
            total_por_tipo[tipo_contato] += 1

    return negocios_por_dia, total_por_tipo

# Substitua o texto abaixo com o seu conjunto de dados real
texto = """
Sergio Fachini Junior - - - SQL Saque Aniversário FGTS 09/03/2024 22:18 
- 
09/03/2024 22:19

Caio Matheus Ramos De Laia - - - SQL Saque Aniversário FGTS 09/03/2024 21:08 
- 
09/03/2024 21:09
"""

negocios_por_dia, total_por_tipo = processar_texto(texto)

# Imprime os resultados formatados por dia e o resumo total por tipo de contato
for dia, contagens in negocios_por_dia.items():
    total_por_dia = sum(contagens.values())
    print(f"Total de novos negócios no dia {dia}: {total_por_dia}")
    for tipo, quantidade in contagens.items():
        print(f"  {tipo}: {quantidade}")
print("\nResumo total por tipo de contato:")
for tipo, total in total_por_tipo.items():
    print(f"{tipo} total = {total}")
