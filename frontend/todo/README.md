# Basicamente o que foi feito até agora é:

## Foram criadas as rotas usando o Express e o Node.JS e o server foi "startado" 

## As rotas foram testadas no navegador e no Insomnia

## Logo depois foi criado o arquivo docker que simula um banco de dados virtual, espelhado no PostgreSQL, é um banco de dados mais facilitado para testes

## E após, usa-se o Prisma para conectar-se ao banco de dados usando as credenciais do arquivo docker, cria-se o modelo do banco de dados, o model Todo, e depois migra esse banco de dados para SQL, toda vez que algo for alterado no model uma nova migração deverá ser feita

 ## Consigo acessar o banco de dados prisma pelo npx prisma studio

# FrontEnd: 

## O axios faz a requisição get na rota READ, e o response.data dessa requisição é jogado nos Todos

<kbd style="color:red;">Este texto é vermelho.</kbd>

    