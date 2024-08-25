/* 

Convenção desse Endpoint (rota):
/api/status 

porém, agora, temos que informar qual função dentro desse arquivo tem essa responsabilidade
*/

function status(request, response) {
  response.status(200).json({ chave: "são acima da média" });
}

export default status;
// sinalizando que, o que é pra exportar de fato pro mundo externo, deste arquivo, é a função status; tornando-a default (padrão), desse endpoint

//forma como está organizada a pasta status, nos da a possibilidade de ter vários arquivos dentro da pasta

/*index.js
por padrão, em meu site contendo html, css, js, assim que o navegador acessar a pasta status do script, e a mesma ser passada no PATH, ele irá ler o arquivo index.js 
*pois é o principal, dessa forma não é necessário especificar o arquivo INDEX no PATH
*/
