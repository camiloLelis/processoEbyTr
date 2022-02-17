# Processo Ebytr
# ERP Ebytr
## sistema criado para ajudar com o controle da produtividade dos colaboradores.
#

### obs: Na Ebytr o time de desenvolvimento utiliza a Stack MERN para criar suas aplicações. Foi combinado com a Ebytr que você utilizará essa mesma Stack.
# Especificações gerais para desenvovimento(MERN)

## MERN: 
### MongoDB - banco de dados de documentos
### Express(.js) - estrutura da Web Node.js
### React(.js) - uma estrutura JavaScript do lado do cliente
### Node(.js) - o principal servidor web JavaScript

## Requisitos:
### node+ instaldo, mongo, 

# 
# Planejamento:
## Desenvolver backend com: ( # camada do aplicativo,processamento)
* node js
* express 
* socket.io
* dotenv 
* Joi
* Mongo db (obs camada) 
* cors
* JWT 
--> TESTES = Jest, Frisby

## Desenvolver frontend com:( # camada => interface do usuário)
* React js
* bootstrap
* socket.io-client
--> TESTES = Jest,

## Desenvolver Testes de integração

## Próximos passos:
* desaclopar a camada de persistência
* conteinerização da aplicação

## Lógica base:
* O usuário entra na pagina principal(a definir), local de login(definir).
* usuario(funcionario/admin) logar(rota), verificar no base de dados(mongo), confirmar se é admin ou colaborador, retornar token (jwt), e fara mais uma busca na tabela de tarefas(alfabética, data de criação ou por status); retorna dados do Backend(api) para o frontend.
*  O frontend(react js) recebe os dados, token(jwt), e a lista de tarefas, e renderiza.
* O usuário pode sendo ele colaborador não admin, pode ver as tarefas e mudar o status desta tarefa.
* O usuário admin pode inserir, editar, deletar as tarefas.
## Lógica a se pensar(features):
  * as tarefas serão apresentadas(renderizadas) de acordo com a função do colaborador.
 * delegar tarefas(onde é importante para empresa que um colaborador em específico a execute)
 * informação de tempo médio para aquela tarefa com base em entregas anteriores da mesma.
 * arquivamento com detalhes das tarefas já executadas para possíveis consultas futuras

## começar backend:
```
criar o banco'ebytr' no mongo
npm install
npm start
```


## começar frontend:
```
npm install
npm start
```