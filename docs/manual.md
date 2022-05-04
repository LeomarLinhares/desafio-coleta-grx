## Introdução

Este projeto faz parte de um teste técnico para um processo seletivo. O mesmo tem como finalidade obter respostas de usuários por meio de um formulário e demonstrar os resultados de forma a ser aproveitado para tomada de decisões.

## Inicialização
Para rodar essa aplicação, você precisará das seguintes ferramentas instaladas:
* Node Package Manager que pode ser encontrado [clicando aqui](https://www.npmjs.com/).
* Node para executar o Javascript fora do navegador. Pode ser encontrado [clicando aqui](https://nodejs.org/en/).
* Git para poder clonar e ter acesso a opções de versionamento, pode ser encontrado [clicando aqui](https://git-scm.com/).

### Passos pós instalação:
 - 1 - Escolha um diretório de sua preferência e clone esse repositório escrevendo em seu terminal o seguinte comando:

```bash
git clone git@github.com:LeomarLinhares/desafio-coleta-grx.git
```
 - 2 - Caminhe até o diretório criado:

```bash
cd desafio-coleta-grx
```
 - 3 - Instale as dependências:

```bash
npm install
```
 - 4 - Crie o build da aplicação:

```bash
npm run build
```
 - 5 - Inicie a aplicação:

```bash
npm start
```

> **⚠ ATENÇÃO: ts-node necessário para desenvolvimento!!**  
> É necessário ter o ts-node instalado globalmente para iniciar o servidor utilizando o ```npm run dev```. Caso não o tenha, instale-o utilizando o comando ```npm install -g ts-node```.

---

## Análise técnica

 - ### Descrição do ambiente técnico

O sistema é composto por front-end simples que reside no diretório ```/public``` e uma API Rest que utiliza da arquitetura MSC para realizar o cadastro de respostas e a consulta.
As ferramentas utilizadas para o desenvolvimento incluem Bootstrap no front-end, Node.js e Express para a API e um arquivo JSON que atua como um banco de dados.

---

## Sobre a API

- ### Mensagens internas

Rotas utilizadas pela aplicação web para executar metodos de **POST**, **GET**. Onde o retorno de cada uma das funções estará contido em um endpoint.

| Nome | Funcionalidade|
|------|--------------|
|```POST``` /api|Adiciona uma nova resposta de formulário ao enviar um body no seguinte [formato](#post-api)|
|```GET``` /api|Retorna uma lista com todas as respostas presentes no arquivo no seguinte [formato](#get-api)|

---

 - ### Formatos de requisição e retornos

#### POST ```/api```

```json
// envia
{
  "question_1": "Sim",
  "question_2": "Sim",
  "question_3": "Agora!!",
  "question_4": "Porque a empresa oferece um excelente ambiente de trabalho inclusivo, diverso e horizontal."
  
}
// retorna
{
	"id": 1,
	"question_1": "Sim",
	"question_2": "Sim",
	"question_3": "Agora!!",
	"question_4": "Porque a empresa oferece um excelente ambiente de trabalho inclusivo, diverso e horizontal.",
	"count": {
		"negativeQuantity": 0,
		"positiveQuantity": 4,
		"neutralQuantity": 0
	}
}
```

#### GET ```/api```

```json
// retorna
[
	{
		"id": 1,
		"question_1": "Sim",
		"question_2": "Sim",
		"question_3": "Agora!!",
		"question_4": "Porque a empresa oferece um excelente ambiente de trabalho inclusivo, diverso e horizontal.",
		"count": {
			"negativeQuantity": 0,
			"positiveQuantity": 4,
			"neutralQuantity": 0
		}
	},
	{
		"id": 2,
		"question_1": "Sim",
		"question_2": "Sim",
		"question_3": "Sim",
		"question_4": "Gostei muito dos benefícios oferecidos e pela preocupação com seus funcionários.",
		"count": {
			"negativeQuantity": 0,
			"positiveQuantity": 4,
			"neutralQuantity": 0
		}
	}
]
```