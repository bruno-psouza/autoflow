from collections import defaultdict
import re

def processar_texto(texto):
    # Inicializa o dicionário para contagem por data e tipo
    negocios_por_dia = defaultdict(lambda: defaultdict(int))
    
    # Expressão regular para capturar o tipo de contato e a última data
    regex_info = re.compile(r'(\bMQL\b|\bSQL\b|\bOportunidade\b|\bProposta\b|\bNegociação\b|\bIndefinido/Perdido\b|\bGanhou\b)')
    regex_data = re.compile(r'-\s*\n(\d{2}/\d{2}/\d{4})')
    
    # Divide o texto em registros, considerando cada bloco separado por linhas
    registros = texto.strip().split('\n\n')
    
    for registro in registros:
        # Encontra o tipo de contato
        tipo_contato_match = regex_info.search(registro)
        # Encontra a data após o hífen (considerada a data relevante do registro)
        data_match = regex_data.search(registro)
        
        if tipo_contato_match and data_match:
            tipo_contato = tipo_contato_match.group(1)
            data = data_match.group(1)
            negocios_por_dia[data][tipo_contato] += 1

    return negocios_por_dia

# Substitua o texto abaixo com o seu conjunto de dados real
texto = """
Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	13/03/2024 10:42	
-
13/03/2024 10:43

Novo Contato	-	-	-		SQL	Saque Aniversário FGTS	13/03/2024 08:54	
-
13/03/2024 08:55

Novo Contato	-	-	-		SQL	Saque Aniversário FGTS	13/03/2024 08:46	
-
13/03/2024 08:47

Novo Contato	-	-	-		SQL	Saque Aniversário FGTS	13/03/2024 08:23	
-
13/03/2024 08:23

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	13/03/2024 08:20	
-
13/03/2024 08:21

Novo Contato	-	-	-		SQL	Saque Aniversário FGTS	13/03/2024 08:15	
-
13/03/2024 08:15

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	13/03/2024 07:48	
-
13/03/2024 07:49

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	13/03/2024 07:16	
-
13/03/2024 07:17

Novo Contato	-	-	-		SQL	Saque Aniversário FGTS	13/03/2024 07:04	
-
13/03/2024 07:07

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	13/03/2024 05:19	
-
13/03/2024 05:20
"""

negocios_por_dia = processar_texto(texto)

# Imprime os resultados formatados, incluindo o total por dia
for dia, contagens in negocios_por_dia.items():
    total_por_dia = sum(contagens.values())
    print(f"Total de novos negócios no dia {dia}: {total_por_dia}")
    for tipo, quantidade in contagens.items():
        print(f"  {tipo}: {quantidade}")
