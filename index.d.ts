import Web3 from "web3";
import {TransactionReceipt, Transaction as Web3Transaction} from "web3-core";

interface Transaction {
    txHash: string,
    method: BridgeMethod,
    events: BridgeEvent[],
    blockNumber: number
}

interface BridgeMethod {
    name: string,
    signature: string,
    arguments: Map<string, unknown>
}

interface BridgeEvent {
    name: string,
    signature: string,
    arguments: Map<string, unknown>
}

/**
 * Gets Bridge Transactions In a Specified Block Hash Or Block Number
 * @param web3Client Web3 Instance
 * @param blockHashOrBlockNumber The block hash or block number.
 * @param network The network.
 * @returns Array - Array of transaction objects
 */
export function getBridgeTransactionsInThisBlock(web3Client: Web3, blockHashOrBlockNumber: string | number, network: string): Promise<Array<Transaction>>;

/**
 * Gets Bridge Transactions In a Specified Range of Blocks
 * @param web3Client Web3 Instance
 * @param startingBlockHashOrBlockNumber The block hash or block number.
 * @param blocksToSearch Number/Amount of blocks to search
 * @param network The network.
 * @returns Array - Array of transaction objects
 */
export function getBridgeTransactionsSinceThisBlock(web3Client: Web3, startingBlockHashOrBlockNumber: string | number, blocksToSearch: string, network: string): Promise<Array<Transaction>>;

/**
 * Gets a Single Bridge Transaction Via The Transaction Hash.
 * @param web3Client Web3 Instance
 * @param transactionHash The transaction hash.
 * @param network The network.
 * @returns Object - A transaction object
 */
export function getBridgeTransactionByTxHash(web3Client: Web3, transactionHash: string, network: string): Promise<Transaction>;

/**
 * Gets a Bridge Transaction given a bridgeTx: web3TransactionObject and a bridgeTxReceipt: TransactionReceipt.
 * @param web3Client Web3 Instance
 * @param bridgeTx The bridgeTx web3TransactionObject.
 * @param bridgeTxReceipt The bridgeTxReceipt: web3TransactionReceiptObject.
 * @param network The network.
 * @returns Object - A transaction object
 */
export function decodeBridgeTransaction(web3Client: Web3, bridgeTx: Web3Transaction, bridgeTxReceipt: TransactionReceipt, network: string): Promise<Transaction>;
