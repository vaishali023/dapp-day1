var contractABI = [];
var contractAddress = '0x787C140F26eAecF494734531cE66b5277c19A7c7';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);