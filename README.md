# How to start project
//first we need to start the blockchain , this spits out 10 accounts with private keys, 
//the first one is the deployer(the shop's owner), the second one is the buyer.
1) npx hardhat node

//then deploy the contracts
2)npx hardhat run --network localhost scripts/deploy.js

//run the database 
3) docker-compose up

//start the server
4) node server.js

//call the endpoint 
5) curl http://localhost:4000/api/getPaymentId/






# Hardhat info

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

