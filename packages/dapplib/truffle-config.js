require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain common harvest industry broken twin'; 
let testAccounts = [
"0x4b9fa9c23d63445cda4f554ba64b3d3a1e4412ccfb06bdd117719056fdeb1262",
"0xe3530bb494771b2884ef821a3f2d82dc5864ca8784f8c0fa0c035db31d860aa7",
"0xa6364d738090145e835a3500cb950277ee3b3e0907fd84dc062961bab33f7fd0",
"0x04dfd3d39574ce6e348af7739b94512fe263e25e8ad3c4169ff08aa6de99142f",
"0x794d0f0e0bef396a0e0017fd92c2769262cbe6271b8b30b5949046a57f49b7a5",
"0xc7b7dece2407246231ebcaf9789381b072dc27e907b468ea075194221aec2bc4",
"0x4f9f418d19406b3afaa4708b56dd9c79b2ed9ed980f0230187ac9312a2e11d89",
"0xd538881907b44c6fba3f7e76c32b8721eacd5f221126ea7a3f0f1674381cf107",
"0x7824abf2689c0d196391c13256c77e0eac417477928ee1fa6eb5d181a536b1c2",
"0xd7dc74c67e6d735e06c7aac79ed5d35eff1dc94863148f9ee45409ead0bcea31"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


