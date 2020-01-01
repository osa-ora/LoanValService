const express = require('express');
var port = 8080;
const app = express();
const bodyParser = require('body-parser');

var todos = [{id: 1, title: 'buy the milk'}, {id: 2, title: 'rent a car'}, {id: 3, title: 'feed the cat'}];

app.use(bodyParser.json())

app.get('/', (request, response) => response.status(200).send('{"status":"UP"}'));

app.post('/', (request, response) => {
    var newTodo = JSON.parse(request.body);
    newTodo.id = todos.length + 1;
    todos.push(newTodo);
    response.status(201).json();
});

app.get('/LoanService/V1/loan/:amount/:monthly', (request, response) => {
    var loanAmount = request.params.amount;
    var creditValue = request.params.monthly;
    //caluclations
    console.log('loanAmount=' + loanAmount + ' & creditValue=' + creditValue);
    var responseString='';
    if (loanAmount < (creditValue / 2)) {
        //send response back
        responseString='{"status":true,"amount": ' + loanAmount + ',"reason":"loan within credit safe value"}';
    } else {
        //send response back
        responseString='{"status":false,"amount":' + loanAmount + ',"reason":"loan exceed the credit safe value"}';
    }
    response.status(200).send(responseString);
});

port= process.env.PORT || '8000';
console.log('Server running at http://127.0.0.1:'+port);
console.log('Sample URL: http://127.0.0.1:'+port+'/LoanService/V1/loan/1000/3000 or / for healthcheck');
app.listen(port);