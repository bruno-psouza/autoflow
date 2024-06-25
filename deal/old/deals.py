from collections import defaultdict
from datetime import datetime

# Dados fornecidos
dados = [
    ("Bruno Pinto Souza", "-", "-", "-", "Proposta", "Saque Aniversário FGTS", "20/12/2022 15:01", "-", "26/02/2024 08:45"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "25/02/2024 21:34", "-", "25/02/2024 21:34"),
    ("Camila Chinelato", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "25/02/2024 19:00", "-", "25/02/2024 19:00"),
    ("João Vitor", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "05/01/2024 05:16", "-", "25/02/2024 18:00"),
    ("Lucas Lima Da Silva", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "25/02/2024 10:40", "-", "25/02/2024 10:42"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "25/02/2024 03:34", "-", "25/02/2024 03:35"),
    ("Quelvi Augusto Moura Da Silva", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "25/02/2024 01:01", "-", "25/02/2024 01:02"),
    ("Tiago Soares", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "24/02/2024 22:02", "-", "24/02/2024 22:03"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "24/02/2024 21:30", "-", "24/02/2024 21:31"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "24/02/2024 14:55", "-", "24/02/2024 14:56"),
    ("Jonas Granja Dos Santos", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "24/02/2024 14:34", "-", "24/02/2024 14:34"),
    ("Wellinton Osmar Da Silveira Wotrich", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "24/02/2024 14:25", "-", "24/02/2024 14:25"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "24/02/2024 11:11", "-", "24/02/2024 11:12"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "24/02/2024 09:38", "-", "24/02/2024 09:44"),
    ("Renato Pereira Dos Santos", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "24/02/2024 09:38", "-", "24/02/2024 09:39"),
    ("Antonio David Santana", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "24/02/2024 09:38", "-", "24/02/2024 09:39"),
    ("Dayane Cristina Da Silva", "-", "-", "-", "Oportunidade", "Saque Aniversário FGTS", "24/02/2024 08:12", "-", "24/02/2024 08:13"),
    ("Maria Cristina De Oliveira Silva", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "24/02/2024 08:06", "-", "24/02/2024 08:06"),
    ("Adriane De Oliveira", "-", "-", "-", "Indefinido/Perdido", "Empréstimo com Garantia", "29/01/2024 08:35", "-", "24/02/2024 05:45"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "23/02/2024 21:48", "-", "23/02/2024 21:49"),
    ("Novo contato", "-", "-", "-", "MQL", "Empréstimo com Garantia", "12/05/2023 17:11", "-", "23/02/2024 19:34"),
    ("Novo contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "12/05/2023 17:11", "-", "23/02/2024 19:34"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "23/02/2024 18:27", "-", "23/02/2024 18:28"),
    ("Geiza Sebastiana Ribeiro Dos Anjos", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "23/02/2024 18:16", "-", "23/02/2024 18:16"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "23/02/2024 10:15", "-", "23/02/2024 16:51"),
    ("Maria Da Penha Oliveira Couto", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "23/02/2024 16:10", "-", "23/02/2024 16:17"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "23/02/2024 14:17", "-", "23/02/2024 14:23"),
    ("Lucilene Queiroz De Souza", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "17/02/2024 12:36", "-", "23/02/2024 13:22"),
    ("Bruno Pinto Souza", "-", "-", "R$ 145,55", "Indefinido/Perdido", "Saque Aniversário FGTS", "04/01/2024 14:47", "29/01/2024", "23/02/2024 09:24"),
    ("Paulo Rogerio Da Gama", "-", "-", "-", "SQL", "Empréstimo com Garantia", "22/02/2024 20:04", "-", "22/02/2024 20:06"),
    ("Michael Anderson Silva", "-", "-", "-", "SQL"),



    # Adicione os outros dados fornecidos aqui
]

# Dicionário para armazenar contagem de novos negócios por dia
contagem_por_dia = defaultdict(lambda: defaultdict(int))

# Percorrer os dados para contagem por dia e tipo de negócio
for dado in dados:
    _, _, _, _, tipo, _, data_criacao, _, _ = dado
    dia = data_criacao.split()[0]  # Extrair apenas a parte da data (sem a hora)
    contagem_por_dia[dia][tipo] += 1

# Imprimir a contagem formatada por dia
for dia, contagem in contagem_por_dia.items():
    print(f"Novos negócios no dia {dia}:")
    for tipo, quantidade in contagem.items():
        print(f"{tipo}: {quantidade}")
    total_dia = sum(contagem.values())
    print(f"Total de Novos Negócios do dia: {total_dia}\n")
