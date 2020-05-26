# testebrydge

Utilização da API:

Configuração arquivo .env
APP_PORT=4000
DB_PORT=3306
DB_HOST=localhost
DB_USER=
DB_PASS=
MYSQL_DB=

Gerar token:
localhost:4000/api/users/login

Inserir um email e senha válido:
{
	"email": "",
	"password" : ""
}


Buscar todos Usuários:
GET/localhost:4000/api/users

Buscar Usuário específico:
GET/localhost:4000/api/users/id


Cadastrar Usuário:
{
	"nome":"",
	"email": "",
  "senha":""
}
Alterar Usuário:
{
 	"nome":"",
	"email": "",
  "id":""
  
}
Deletar Usuário:
{
 	"id":""  
}


Cadastrar Pagamento:

{
	"id_usu":"",
	"nome":"",
	"valor_real": 	
}

Visualizar Pagamentos:
GET/localhost:4000/api/pagto

Visualizar Pagamento Específico:
GET/localhost:4000/api/pagto/id

Atualizar Pagamento:
{
 	"id":"",
  "nome":"",
  "valor_real":  
}

Deletar Pagamento:
{
 	"id":""  
}










