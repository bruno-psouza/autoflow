# Texto fornecido
texto = """
Novo Contato    -   -   -       MQL    Saque Aniversário FGTS    25/02/2024 21:34    
-
25/02/2024 21:34

Camila Chinelato    -   -   -       SQL    Saque Aniversário FGTS    25/02/2024 19:00    
-
25/02/2024 19:00

João Vitor    -   -   -       MQL    Saque Aniversário FGTS    05/01/2024 05:16    
-
25/02/2024 18:00

Lucas Lima Da Silva    -   -   -       SQL    Saque Aniversário FGTS    25/02/2024 10:40    
-
25/02/2024 10:42

Novo Contato    -   -   -       MQL    Saque Aniversário FGTS    25/02/2024 03:34    
-
25/02/2024 03:35

Quelvi Augusto Moura Da Silva    -   -   -       SQL    Saque Aniversário FGTS    25/02/2024 01:01    
-
25/02/2024 01:02

Tiago Soares    -   -   -       SQL    Saque Aniversário FGTS    24/02/2024 22:02    
-
24/02/2024 22:03
"""

# Separar as linhas do texto
linhas = texto.strip().split("\n")

# Dicionário para contar as ocorrências por dia
ocorrencias_por_dia = {}

# Iterar sobre as linhas e contar ocorrências
for linha in linhas:
    campos = linha.split("\t")
    
    # Verificar se a linha tem o número esperado de campos
    if len(campos) >= 6:
        status = campos[4]
        data_hora = campos[-1]
        data = data_hora.split()[0]  # Pegar apenas a parte da data
        
        if data not in ocorrencias_por_dia:
            ocorrencias_por_dia[data] = {"MQL": 0, "SQL": 0, "Oportunidade": 0, "Proposta": 0, "Indefinido/Perdido": 0, "Ganhou": 0}
        
        if status == "MQL":
            ocorrencias_por_dia[data]["MQL"] += 1
        elif status == "SQL":
            ocorrencias_por_dia[data]["SQL"] += 1
        elif status == "Oportunidade":
            ocorrencias_por_dia[data]["Oportunidade"] += 1
        elif status == "Proposta":
            ocorrencias_por_dia[data]["Proposta"] += 1
        elif status == "Indefinido/Perdido":
            ocorrencias_por_dia[data]["Indefinido/Perdido"] += 1
        elif status == "Ganhou":
            ocorrencias_por_dia[data]["Ganhou"] += 1
    else:
        print("Erro: Formato de linha inválido:", linha)

# Exibir os resultados
for data, ocorrencias in ocorrencias_por_dia.items():
    print("Dia", data + ":", end=" ")
    for status, quantidade in ocorrencias.items():
        print(status + ":", quantidade, end=", ")
    print()
