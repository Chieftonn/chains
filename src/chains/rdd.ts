/** source: https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp */

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'ReddCoin',
  unit: 'RDD',
  decimalPlaces: 1e8,
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    'b868e0d95a3c3c0e0dadc67ee587aaf9dc8acbf99e3b4b3110fad4eb74c1decc',
  port: 45444,
  portRpc: 45443,
  seedsDns: [
    'seed.reddcoin.com',
    'dnsseed01.redd.ink',
    'dnsseed02.redd.ink',
    'dnsseed03.redd.ink',
  ],
  versions: {
    // https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp#L317
    bip32: {
      private: 0x0488b21e,
      public: 0x0488ade4,
    },
    bip44: 4,
    private: 0xbd,
    public: 0x3d,
    scripthash: 0x05,
  },
};

const test: TestNetwork = {
  ...common,
  hashGenesisBlock:
    'a12ac9bd4cd26262c53a6277aafc61fe9dfe1e2b05eaa1ca148a5be8b394e35a',
  port: 55444,
  portRpc: 55443,
  seedsDns: ['testnet-seed.reddcoin.com', 'testnet-dnsseed.redd.ink'],
  versions: {
    // https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp#L384
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  },
};

export const rdd = {
  main,
  test,
};
