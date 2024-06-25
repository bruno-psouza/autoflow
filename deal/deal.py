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

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	17/05/2024 16:30	
-
17/05/2024 16:30

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	17/05/2024 16:11	
-
17/05/2024 16:12

Jaciane Ribeiro Tavares	-	-	-		SQL	Saque Aniversário FGTS	17/05/2024 14:11	
-
17/05/2024 14:12

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	17/05/2024 13:54	
-
17/05/2024 13:54

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	17/05/2024 13:30	
-
17/05/2024 13:32

Clemilda Santos De Souza	-	-	-		MQL	Saque Aniversário FGTS	17/05/2024 12:44	
-
17/05/2024 12:44

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	17/05/2024 08:04	
-
17/05/2024 08:05

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	16/05/2024 22:49	
-
16/05/2024 22:50

Novo Contato	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	16/05/2024 16:01	
-
16/05/2024 16:02

Rosimeri Ferreira De Andrade	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	16/05/2024 15:20	
-
16/05/2024 15:20

Adriane De Oliveira	-	-	-		Oportunidade	Empréstimo com Garantia	14/05/2024 15:57	
-
16/05/2024 14:49

Cristina Lima Xavier Barros	-	-	-		SQL	Empréstimo com Garantia	16/05/2024 13:34	
-
16/05/2024 13:35

Maria Euripedes Pereira	-	-	-		SQL	Saque Aniversário FGTS	16/05/2024 13:18	
-
16/05/2024 13:19

Vitoria Machado Araujo	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	16/05/2024 12:46	
-
16/05/2024 12:47

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
16/05/2024 12:32

Mariza Ramos Dos Santos	-	-	-		SQL	Saque Aniversário FGTS	16/05/2024 12:18	
-
16/05/2024 12:18

Rosemary Messias Ferreira	-	-	-		SQL	Saque Aniversário FGTS	16/05/2024 11:35	
-
16/05/2024 11:36

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	16/05/2024 10:35	
-
16/05/2024 10:37

Fabio Donizeti Fernandes	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	16/05/2024 08:53	
-
16/05/2024 09:31

Denise Da Conceicao Silva Santiago	-	-	-		SQL	Saque Aniversário FGTS	16/05/2024 09:24	
-
16/05/2024 09:25

Fabio Donizeti Fernandes	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	16/05/2024 08:53	
-
16/05/2024 08:53

Camila Cristiele Marquezan De Campos	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	15/05/2024 21:27	
-
15/05/2024 21:27

Nayara Aparecida Fernandes Dos Reis	-	-	-		SQL	Saque Aniversário FGTS	15/05/2024 17:24	
-
15/05/2024 17:24

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
15/05/2024 17:14

Simone Santos De Almeida	-	-	-		SQL	Saque Aniversário FGTS	15/05/2024 16:43	
-
15/05/2024 16:44

Paulo Alencar Da Costa	-	-	-		Oportunidade	Saque Aniversário FGTS	15/05/2024 09:27	
-
15/05/2024 12:04

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	15/05/2024 11:22	
-
15/05/2024 11:23

Douglas Rodrigues Ramos	-	-	-		SQL	Saque Aniversário FGTS	15/05/2024 10:34	
-
15/05/2024 10:34

Marconiel Nascimento Da Silva	-	-	-		SQL	Saque Aniversário FGTS	15/05/2024 10:31	
-
15/05/2024 10:32

Maria Ferreira Do Nascimento	-	-	-		SQL	Saque Aniversário FGTS	15/05/2024 10:28	
-
15/05/2024 10:28

Novo contato	-	-	-		Oportunidade	Empréstimo com Garantia	14/05/2024 22:50	
-
15/05/2024 10:27

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
15/05/2024 09:15

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
15/05/2024 08:49

Maria Regina Rosa De Souza	-	-	-		SQL	Empréstimo com Garantia	14/05/2024 23:16	
-
14/05/2024 23:17

Novo contato	-	-	-		Oportunidade	Empréstimo com Garantia	14/05/2024 22:50	
-
14/05/2024 23:05

Novo contato	-	-	-		SQL	Saque Aniversário FGTS	14/05/2024 22:50	
-
14/05/2024 22:51

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	14/05/2024 21:53	
-
14/05/2024 21:55

Patricia Renata Chiarato	-	-	-		SQL	Empréstimo com Garantia	14/05/2024 21:20	
-
14/05/2024 21:20

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	14/05/2024 20:56	
-
14/05/2024 20:59

Jose Ribamar Silva	-	-	-		SQL	Saque Aniversário FGTS	14/05/2024 14:56	
-
14/05/2024 14:58

Willian Henrique Furtoso Pereira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 14:13	
14/05/2024 14:15

Willian Henrique Furtoso Pereira	-	-	-		Proposta	Saque Aniversário FGTS	14/05/2024 13:55	
-
14/05/2024 13:55

Keila Cristiane Alves Franca	-	-	-		Indefinido/Perdido	Empréstimo com Garantia	14/05/2024 13:51	
-
14/05/2024 13:51

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	14/05/2024 13:02	
-
14/05/2024 13:03

Edson Andrade Da Silva	-	-	-		SQL	Saque Aniversário FGTS	13/05/2024 19:50	
-
13/05/2024 19:51

Luis De Sousa Batista	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	13/05/2024 16:24	
-
13/05/2024 16:25

Zeni Soares De Souza	-	-	-		Oportunidade	Empréstimo com Garantia	13/05/2024 16:08	
-
13/05/2024 16:08

Terezinha De Jesus Dos Santos Costa	-	-	-		SQL	Saque Aniversário FGTS	13/05/2024 15:01	
-
13/05/2024 15:02

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	13/05/2024 11:18	
-
13/05/2024 11:19

Maria Aparecida Mendes	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	13/05/2024 10:21	
-
13/05/2024 10:30

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Empréstimo com Garantia	14/05/2024 15:57	
-
13/05/2024 09:52

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	12/05/2024 22:01	
-
12/05/2024 22:01

Valdete Aparecida Renner Fidencio	-	-	-		SQL	Saque Aniversário FGTS	12/05/2024 21:04	
-
12/05/2024 21:04

Kayllane Alves De Jesus Serafim	-	-	-		SQL	Saque Aniversário FGTS	12/05/2024 17:57	
-
12/05/2024 17:58

Anastacio Pereira	-	-	-		SQL	Saque Aniversário FGTS	12/05/2024 13:41	
-
12/05/2024 13:42

Vanderlei Mailson Da Silva De Oliveira	-	-	-		SQL	Saque Aniversário FGTS	12/05/2024 11:40	
-
12/05/2024 11:41

Novo Contato	-	-	-		MQL	Empréstimo com Garantia	12/05/2024 11:18	
-
12/05/2024 11:19

Novo Contato	-	-	-		MQL	Saque Aniversário FGTS	12/05/2024 10:50	
-
12/05/2024 10:51

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
10/05/2024 16:25

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
09/05/2024 08:03

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
09/05/2024 07:58

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
08/05/2024 17:26

Adriane De Oliveira	-	-	-		SQL	Empréstimo com Garantia	14/05/2024 15:57	
-
29/04/2024 09:42

Adriane De Oliveira	0	-	-		Indefinido/Perdido	Empréstimo com Garantia	14/05/2024 15:57	
-
29/04/2024 09:40

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
29/04/2024 09:38

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
24/04/2024 17:51

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
24/04/2024 15:31

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
24/04/2024 13:59

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
23/04/2024 14:12

Adriane De Oliveira	10	-	-		Indefinido/Perdido	Empréstimo com Garantia	14/05/2024 15:57	
23/04/2024 08:25

Alexandre Hartmann	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	15/05/2024 20:20	
-
19/04/2024 08:59

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
11/04/2024 17:28

Adriane De Oliveira	10	-	-		Indefinido/Perdido	Empréstimo com Garantia	14/05/2024 15:57	
01/04/2024 14:19

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
22/03/2024 08:42

Alexandre Hartmann	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	15/05/2024 20:20	
-
20/03/2024 09:16

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Empréstimo com Garantia	14/05/2024 15:57	
11/03/2024 10:14

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
20/02/2024 11:45

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
20/02/2024 11:25

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Empréstimo com Garantia	14/05/2024 15:57	
-
15/02/2024 16:57

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
-
15/02/2024 08:25

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Empréstimo com Garantia	14/05/2024 15:57	
-
09/02/2024 14:28

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
09/02/2024 11:43

Adriane De Oliveira	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	14/05/2024 15:57	
08/02/2024 14:43

Paulo Alencar Da Costa	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	15/05/2024 09:27	
-
29/01/2024 14:50

Rosimeri Ferreira De Andrade	-	-	-		Indefinido/Perdido	Saque Aniversário FGTS	16/05/2024 15:20	
-
28/12/2023 13:58

"""

negocios_por_dia = processar_texto(texto)

# Imprime os resultados formatados, incluindo o total por dia
for dia, contagens in negocios_por_dia.items():
    total_por_dia = sum(contagens.values())
    print(f"Total de novos negócios no dia {dia}: {total_por_dia}")
    for tipo, quantidade in contagens.items():
        print(f"  {tipo}: {quantidade}")
