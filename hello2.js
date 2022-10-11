/**
 * Exemplo de uso de um módulo nativo
 * @author Kawuan MIzael
 */

const http = require('http')
http.createServer((req,res)=>{
    res.write("Bem vindo ao Node")
    res.end()
}).listen(4040)