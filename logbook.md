# Logbook (API)

Iniciei o projeto com Typescript porque acho mais conveniente para trabalhar com orientação à objetos, já que podemos definir tipos e interfaces. Além disso eu p assumi como se ele fosse escalável, por isso criei estruturas de pastas, apesar de não ter uma complexidade gigantesca de rotas.

Dividi a API no modelo MSC

 - Na camada model eu decidi criar um padrão de todas as funções receberem uma string e retornarem um Buffer do módulo fs.
 - Na camada service é onde vou fazer as conversões, criar os objetos e, em caso de erros, fazer o tratamento dos mesmos. Ou seja, é onde vou concentrar a regra de negócio da API.
 - Na camada controller eu vou manter apenas as requisições e as respostas, concentrando aqui a comunicação com as rotas.