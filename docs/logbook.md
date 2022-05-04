# Logbook

Iniciei o projeto com Typescript porque acho mais conveniente para trabalhar com orientação à objetos, já que podemos definir tipos e interfaces. Além disso eu p assumi como se ele fosse escalável, por isso criei estruturas de pastas, apesar de não ter uma complexidade gigantesca de rotas.

Dividi a API no modelo MSC

 - Na camada model eu decidi criar um padrão de todas as funções receberem uma string e retornarem um Buffer do módulo fs.
 - Na camada service é onde vou fazer as conversões, criar os objetos e, em caso de erros, fazer o tratamento dos mesmos. Ou seja, é onde vou concentrar a regra de negócio da API.
 - Na camada controller eu vou manter apenas as requisições e as respostas, concentrando aqui a comunicação com as rotas.

Na parte de front-end decidi não utilizar o React e focar apenas no HTML, CSS e Javascript para simplificar a solução.

Decidi que o front-end poderia ficar na pasta ```public```. Assim toda a aplicação seria servida pelo mesmo servidor da API.

Foi uma coisa boa porque eu tô acostumado a ver o node servindo o React sem enxergar totalmente como tudo funciona por baixo dos panos e desenvolvendo esse projeto eu tive um vislumbre de uma parte do funcionamento do React.

## Aprendizado

Um bom **aprendizado** que tive fazendo esse projeto foi que, como eu separei a aplicação em repositórios diferentes, eu pesquisei depois como eu poderia fazer para uní-los sem perder o log de versionamento. Foi aí que descobri que posso adicionar um ```remote``` de um outro diretório que contenha o ```.git```. Após isso, fazer o fetch resultando em uma nova branch remota onde se pode fazer o merge dos dois projetos.