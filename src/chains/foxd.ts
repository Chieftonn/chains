/* source: https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Foxdcoin',
  unit: 'FOXD',
  decimalPlaces: 1e8,
  // https://github.com/foxdproject/foxdcoin/blob/master/src/validation.cpp#L119
  messagePrefix: 'Foxdcoin Signed Message:\n',
};

const main: Network = {
  ...common,
  // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L222
  hashGenesisBlock:
    '000000a26ea2c04148915028ac33daef2c004e2c2f45841a5af07ce0b57a9cf4',
  // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L170
  port: 8769,
  // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparamsbase.cpp#L37
  portRpc: 8770,
  // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L166
  protocol: {
    magic: 0x82abee93,
  },
  // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L226
  seedsDns: [
    'seed1.foxdcoin.com',
    'seed2.foxdcoin.com',
    'seed3.foxdcoin.com',
    'seed4.foxdcoin.com'
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L237
    bip44: 175,
    // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L234
    private: 0x80,
    // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L232
    public: 0x23,
    // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L233
    scripthash: 0x1e,
  },
};

const test: TestNetwork = {
  ...common,
  // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L430
  hashGenesisBlock:
    '0000000bff3c34ba01bd51028bf3a9bc68fc20904796d59b032d249838f67d36',
  // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L360
  port: 18770,
  // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparamsbase.cpp#L49
  portRpc: 18766,
  protocol: {
    magic: 0x54a3a1e4,
  },
  seedsDns: [
    'seed-testnet-foxdcoin.bitactivate.com',
    'seed-testnet-foxdcoin.foxdcoin.com',
    'seed-testnet-foxdcoin.foxdcoin.org',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L443
    private: 0xef,
    // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L441
    public: 0x5f,
    // https://github.com/foxdproject/foxdcoin/blob/master/src/chainparams.cpp#L442
    scripthash: 0x5a,
  },
};

export const foxd = {
  main,
  test,
};