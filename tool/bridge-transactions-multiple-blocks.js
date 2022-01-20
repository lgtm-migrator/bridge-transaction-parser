const Web3 = require('web3');
const networkParser = require('./network-parser');
const blockTransactionParser = require('../index');

(async () => {
    try {
        const network = process.argv[2];
        const web3Client = new Web3(networkParser(network));

        const startingBlock = process.argv[3];
        const blocksToSearch = process.argv[4]; // Input should be between 1 and 100
        
        console.log("Searching...");
        const transactions = await blockTransactionParser.getBridgeTransactionsSinceThisBlock(web3Client, startingBlock, blocksToSearch, network);
        
        if (transactions.length) {
            console.log(JSON.stringify(transactions, null, 2));
        } else {
            console.log(`No Bridge transactions found between blocks ${startingBlock} and ${Number(startingBlock) + Number(blocksToSearch) - 1}`);
        }
    } catch (error) {
        console.log(error);
    }
})();
