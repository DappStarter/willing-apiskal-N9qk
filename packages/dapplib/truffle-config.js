require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz enter brand spot toy note magic artwork inflict force force gate'; 
let testAccounts = [
"0x57f27244c078bd60e6d7a1c9d59b3fd4af52cc3f2d677a731a430c22db098409",
"0xae3d444791b245b5585d72c0275927093eefdc517c906829cbb54fc8db57b243",
"0x268a988fbccf9d526aa6cc4447e030c96ea32375341704fea7c55b3f869bceeb",
"0xb12880408a9f0eddbeeebee4389b1c37dbd640da2c6263fd2af47bf8a125a855",
"0x6a1a6cc583654e90ea73f7760aec49b3cfe82484985e86d67b71b213e068d52a",
"0x2ddc0bca68f40ac5755401fef5c87bff8a1d5a72e73c2b7e7da66c83e027c679",
"0xf3597a570618f7bcbfcfd2ceee95fce116f9be3e39e40f4dcebe47ef77d55297",
"0x4f80aa28a50f914619998789c62d4afac832a1f2b341fc767ad31d68a3d8cdba",
"0x0e7d1392ab6204bf029075df46d0069b5536d0cf01098c563bedbc4ab403ee9c",
"0xe15b518f58f05be0cb9e298a165ec1a65875fdc1daeceb0585e90f135e48160a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


