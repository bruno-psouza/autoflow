from collections import defaultdict

dados = [
     ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "06/06/2023 11:31", "-", "07/03/2024 19:13"),
    ("Caique Da Silva Santos", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "07/03/2024 18:52", "-", "07/03/2024 18:53"),
    ("Rodrigo Ribeiro De Souza Filho", "-", "-", "-", "SQL", "Empréstimo com Garantia", "07/03/2024 15:16", "-", "07/03/2024 15:20"),
    ("Valdete Sales De Jesus Marcel", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "07/03/2024 15:02", "-", "07/03/2024 15:03"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "07/03/2024 13:50", "-", "07/03/2024 13:51"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "07/03/2024 13:04", "-", "07/03/2024 13:06"),
    ("Andreia Aparecida De Sousa Garcia", "-", "-", "-", "Oportunidade", "Saque Aniversário FGTS", "07/03/2024 11:20", "-", "07/03/2024 11:21"),
    ("Novo Contato", "-", "-", "-", "MQL", "Saque Aniversário FGTS", "07/03/2024 09:54", "-", "07/03/2024 09:54"),
    ("Max Filipe Araujo", "-", "-", "-", "Oportunidade", "Saque Aniversário FGTS", "07/03/2024 08:05", "-", "07/03/2024 08:06"),
    ("Manoel Vagno Dos Santos Silva", "-", "-", "-", "SQL", "Saque Aniversário FGTS", "07/03/2024 07:10", "-", "07/03/2024 07:12")
]

contagem_por_dia = defaultdict(lambda: defaultdict(int))

for dado in dados:
    _, _, _, _, tipo, _, _, _, data_ultima_insercao = dado
    dia = data_ultima_insercao.split()[0]  
    contagem_por_dia[dia][tipo] += 1

for dia, contagem in contagem_por_dia.items():
    print(f"Novos negócios no dia {dia}:")
    for tipo, quantidade in contagem.items():
        print(f"{tipo}: {quantidade}")
    total_dia = sum(contagem.values())
    print(f"Total de Novos Negócios do dia: {total_dia}\n")
