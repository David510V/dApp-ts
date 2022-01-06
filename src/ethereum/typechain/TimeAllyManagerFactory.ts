/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { TimeAllyManager } from './TimeAllyManager';

export class TimeAllyManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TimeAllyManager> {
    return super.deploy(overrides || {}) as Promise<TimeAllyManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimeAllyManager {
    return super.attach(address) as TimeAllyManager;
  }
  connect(signer: Signer): TimeAllyManagerFactory {
    return super.connect(signer) as TimeAllyManagerFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TimeAllyManager {
    return new Contract(address, _abi, signerOrProvider) as TimeAllyManager;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'master',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'child',
        type: 'address',
      },
    ],
    name: 'StakingMerge',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'master',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'child',
        type: 'address',
      },
    ],
    name: 'StakingSplit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'staking',
        type: 'address',
      },
    ],
    name: 'StakingTransfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'adminMode',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deactivateAdminMode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_startMonth',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_endMonth',
        type: 'uint256',
      },
    ],
    name: 'decreaseActiveStaking',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultMonths',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deployer',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_childStaking',
        type: 'address',
      },
    ],
    name: 'emitStakingMerge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_oldOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'emitStakingTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_month',
        type: 'uint256',
      },
    ],
    name: 'getTimeAllyMonthlyNRT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_month',
        type: 'uint256',
      },
    ],
    name: 'getTotalActiveStaking',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_startMonth',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_endMonth',
        type: 'uint256',
      },
    ],
    name: 'increaseActiveStaking',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_stakingContract',
        type: 'address',
      },
    ],
    name: 'isStakingContractValid',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nrtManager',
    outputs: [
      {
        internalType: 'contract NRTManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'prepaidEs',
    outputs: [
      {
        internalType: 'contract PrepaidEs',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'prepaidFallback',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_reward',
        type: 'uint256',
      },
      {
        internalType: 'enum TimeAllyManager.RewardType',
        name: '_rewardType',
        type: 'uint8',
      },
    ],
    name: 'processNrtReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'receiveNrt',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'removeStaking',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_initialIssTime',
        type: 'uint256',
      },
      {
        internalType: 'bool[]',
        name: '_claimedMonths',
        type: 'bool[]',
      },
    ],
    name: 'sendStake',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_nrtAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_validatorManager',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_prepaidEs',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_stakingTarget',
        type: 'address',
      },
    ],
    name: 'setInitialValues',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_initialIssTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_masterEndMonth',
        type: 'uint256',
      },
    ],
    name: 'splitStaking',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stake',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingTarget',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'validatorManager',
    outputs: [
      {
        internalType: 'contract ValidatorManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawClaimedNrt',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x6080604052600c6005556001600660006101000a81548160ff02191690831515021790555034801561003057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612ad3806100806000396000f3fe60806040526004361061014f5760003560e01c8063c4b26791116100b6578063e963a8351161006f578063e963a83514610408578063f456795114610445578063f466d73514610470578063faf5d71e1461049b578063fce29978146104c6578063fe55bde9146104ef57610156565b8063c4b26791146102f5578063c6521e401461031e578063d5f394881461035b578063d7cc31a114610386578063dc8cdb5d146103c3578063e390aba5146103ec57610156565b806390de82341161010857806390de82341461022757806392759e73146102525780639646c1d21461028f578063b775298114610299578063b9224fd7146102b0578063bd75bfbd146102d957610156565b80630df5202f1461015b578063248ea35f146101865780633a4b66f1146101af5780635a995e45146101b957806361f7cece146101e257806366140b33146101fe57610156565b3661015657005b600080fd5b34801561016757600080fd5b5061017061051a565b60405161017d919061262e565b60405180910390f35b34801561019257600080fd5b506101ad60048036038101906101a89190611d35565b610540565b005b6101b76105e5565b005b3480156101c557600080fd5b506101e060048036038101906101db9190611dea565b61067e565b005b6101fc60048036038101906101f79190611f18565b61073b565b005b34801561020a57600080fd5b5061022560048036038101906102209190611fa6565b6107de565b005b34801561023357600080fd5b5061023c610883565b6040516102499190612613565b60405180910390f35b34801561025e57600080fd5b5061027960048036038101906102749190611e26565b610896565b6040516102869190612613565b60405180910390f35b610297610ab8565b005b3480156102a557600080fd5b506102ae610c07565b005b3480156102bc57600080fd5b506102d760048036038101906102d29190611fa6565b610c73565b005b6102f360048036038101906102ee9190611e62565b610d18565b005b34801561030157600080fd5b5061031c60048036038101906103179190611d35565b610dbc565b005b34801561032a57600080fd5b5061034560048036038101906103409190611d35565b610ed1565b6040516103529190612613565b60405180910390f35b34801561036757600080fd5b50610370610f27565b60405161037d919061253e565b60405180910390f35b34801561039257600080fd5b506103ad60048036038101906103a89190611f18565b610f4b565b6040516103ba9190612821565b60405180910390f35b3480156103cf57600080fd5b506103ea60048036038101906103e59190611f6a565b610f68565b005b61040660048036038101906104019190611ec9565b6113ff565b005b34801561041457600080fd5b5061042f600480360381019061042a9190611f18565b6115b1565b60405161043c9190612821565b60405180910390f35b34801561045157600080fd5b5061045a6115ce565b6040516104679190612649565b60405180910390f35b34801561047c57600080fd5b506104856115f4565b604051610492919061253e565b60405180910390f35b3480156104a757600080fd5b506104b061161a565b6040516104bd9190612821565b60405180910390f35b3480156104d257600080fd5b506104ed60048036038101906104e89190611d87565b611620565b005b3480156104fb57600080fd5b506105046117b8565b6040516105119190612664565b60405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61054933610ed1565b610588576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057f90612781565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f9e4e77259ab6df05e634dcca75fedfff963cdc9715a03df6e20bf304dd3998c460405160405180910390a350565b60003411610628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061f906127e1565b60405180910390fd5b61067b343360008067ffffffffffffffff8111801561064657600080fd5b506040519080825280602002602001820160405280156106755781602001602082028036833780820191505090505b506117de565b50565b61068733610ed1565b6106c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bd90612781565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fb0d68f5dd7154b627a45e19feff47232166606d72750a205e2cb36000b9408f760405160405180910390a45050565b600660009054906101000a900460ff1661078a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078190612801565b60405180910390fd5b60008111156107db573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156107d9573d6000803e3d6000fd5b505b50565b6107e733610ed1565b610826576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081d90612781565b60405180910390fd5b60008290505b81811161087d576108598460086000848152602001908152602001600020546119a090919063ffffffff16565b6008600083815260200190815260200160002081905550808060010191505061082c565b50505050565b600660009054906101000a900460ff1681565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610928576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091f90612761565b60405180910390fd5b61093183610ed1565b156109ca57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639830995284846040518363ffffffff1660e01b8152600401610993929190612582565b600060405180830381600087803b1580156109ad57600080fd5b505af11580156109c1573d6000803e3d6000fd5b50505050610aae565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639830995230846040518363ffffffff1660e01b8152600401610a27929190612559565b600060405180830381600087803b158015610a4157600080fd5b505af1158015610a55573d6000803e3d6000fd5b50505050610aac828460008067ffffffffffffffff81118015610a7757600080fd5b50604051908082528060200260200182016040528015610aa65781602001602082028036833780820191505090505b506117de565b505b6001905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3f90612721565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fcc3e8226040518163ffffffff1660e01b815260040160206040518083038186803b158015610bb257600080fd5b505afa158015610bc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bea9190611f41565b905034600960008381526020019081526020016000208190555050565b600660009054906101000a900460ff16610c56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4d90612801565b60405180910390fd5b6000600660006101000a81548160ff021916908315150217905550565b610c7c33610ed1565b610cbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb290612781565b60405180910390fd5b60008290505b818111610d1257610cee8460086000848152602001908152602001600020546119f590919063ffffffff16565b60086000838152602001908152602001600020819055508080600101915050610cc1565b50505050565b600660009054906101000a900460ff16610d67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5e90612801565b60405180910390fd5b60003411610daa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da1906127e1565b60405180910390fd5b610db6348484846117de565b50505050565b610dc533610ed1565b610e04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfb90612781565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fb0d68f5dd7154b627a45e19feff47232166606d72750a205e2cb36000b9408f760405160405180910390a450565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060086000838152602001908152602001600020549050919050565b610f7133610ed1565b610fb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa790612781565b60405180910390fd5b81471015610ff3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fea906127a1565b60405180910390fd5b600033905060008173ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561104057600080fd5b505afa158015611054573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110789190611d5e565b90506000611090600286611a3f90919063ffffffff16565b905060008060008060028111156110a357fe5b8760028111156110af57fe5b14156110bd5783915061117a565b600160028111156110ca57fe5b8760028111156110d657fe5b14156110e757839050839250611179565b6002808111156110f357fe5b8760028111156110ff57fe5b14156111365761112c606461111e60e187611a8990919063ffffffff16565b611a3f90919063ffffffff16565b9050879350611178565b6000611177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116e906126c1565b60405180910390fd5b5b5b5b60008411156112315760003373ffffffffffffffffffffffffffffffffffffffff16856040516111a990612529565b60006040518083038185875af1925050503d80600081146111e6576040519150601f19603f3d011682016040523d82523d6000602084013e6111eb565b606091505b505090508061122f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611226906126e1565b60405180910390fd5b505b60008311156112c957600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663301bae2e84876040518363ffffffff1660e01b8152600401611296919061253e565b6000604051808303818588803b1580156112af57600080fd5b505af11580156112c3573d6000803e3d6000fd5b50505050505b60008211156113805760008573ffffffffffffffffffffffffffffffffffffffff16836040516112f890612529565b60006040518083038185875af1925050503d8060008114611335576040519150601f19603f3d011682016040523d82523d6000602084013e61133a565b606091505b505090508061137e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137590612701565b60405180910390fd5b505b60008111156113f5578573ffffffffffffffffffffffffffffffffffffffff1663572887c2826040518263ffffffff1660e01b81526004016113c29190612821565b600060405180830381600087803b1580156113dc57600080fd5b505af11580156113f0573d6000803e3d6000fd5b505050505b5050505050505050565b61140833610ed1565b611447576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143e90612781565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fcc3e8226040518163ffffffff1660e01b815260040160206040518083038186803b1580156114b157600080fd5b505afa1580156114c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e99190611f41565b90506114f9346001830184610c73565b600061154e348686600067ffffffffffffffff8111801561151957600080fd5b506040519080825280602002602001820160405280156115485781602001602082028036833780820191505090505b506117de565b90508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f26a2dff523e79d9f7fd8119199756e7902dd93800ee482577367d8733b03a53760405160405180910390a35050505050565b600060096000838152602001908152602001600020549050919050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a5906126a1565b60405180910390fd5b83600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008061180c600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611af9565b90506001600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fb0d68f5dd7154b627a45e19feff47232166606d72750a205e2cb36000b9408f760405160405180910390a48073ffffffffffffffffffffffffffffffffffffffff1663098dbc9e878760055488600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168a6040518863ffffffff1660e01b8152600401611962969594939291906125ab565b6000604051808303818588803b15801561197b57600080fd5b505af115801561198f573d6000803e3d6000fd5b505050505080915050949350505050565b6000808284019050838110156119eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e2906127c1565b60405180910390fd5b8091505092915050565b6000611a3783836040518060400160405280601e81526020017f536166654d6174683a205375627472616374696f6e206f766572666c6f770000815250611b63565b905092915050565b6000611a8183836040518060400160405280601a81526020017f536166654d6174683a204469766973696f6e206279207a65726f000000000000815250611bbe565b905092915050565b600080831415611a9c5760009050611af3565b6000828402905082848281611aad57fe5b0414611aee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ae590612741565b60405180910390fd5b809150505b92915050565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f092505050919050565b6000838311158290611bab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba2919061267f565b60405180910390fd5b5060008385039050809150509392505050565b60008083118290611c05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bfc919061267f565b60405180910390fd5b506000838581611c1157fe5b049050809150509392505050565b600081359050611c2e81612a31565b92915050565b600081519050611c4381612a31565b92915050565b600081359050611c5881612a48565b92915050565b600082601f830112611c6f57600080fd5b8135611c82611c7d82612869565b61283c565b91508181835260208401935060208101905083856020840282011115611ca757600080fd5b60005b83811015611cd75781611cbd8882611ce1565b845260208401935060208301925050600181019050611caa565b5050505092915050565b600081359050611cf081612a5f565b92915050565b600081359050611d0581612a76565b92915050565b600081359050611d1a81612a86565b92915050565b600081519050611d2f81612a86565b92915050565b600060208284031215611d4757600080fd5b6000611d5584828501611c1f565b91505092915050565b600060208284031215611d7057600080fd5b6000611d7e84828501611c34565b91505092915050565b60008060008060808587031215611d9d57600080fd5b6000611dab87828801611c49565b9450506020611dbc87828801611c1f565b9350506040611dcd87828801611c1f565b9250506060611dde87828801611c1f565b91505092959194509250565b60008060408385031215611dfd57600080fd5b6000611e0b85828601611c1f565b9250506020611e1c85828601611c1f565b9150509250929050565b60008060408385031215611e3957600080fd5b6000611e4785828601611c1f565b9250506020611e5885828601611d0b565b9150509250929050565b600080600060608486031215611e7757600080fd5b6000611e8586828701611c1f565b9350506020611e9686828701611d0b565b925050604084013567ffffffffffffffff811115611eb357600080fd5b611ebf86828701611c5e565b9150509250925092565b600080600060608486031215611ede57600080fd5b6000611eec86828701611c1f565b9350506020611efd86828701611d0b565b9250506040611f0e86828701611d0b565b9150509250925092565b600060208284031215611f2a57600080fd5b6000611f3884828501611d0b565b91505092915050565b600060208284031215611f5357600080fd5b6000611f6184828501611d20565b91505092915050565b60008060408385031215611f7d57600080fd5b6000611f8b85828601611d0b565b9250506020611f9c85828601611cf6565b9150509250929050565b600080600060608486031215611fbb57600080fd5b6000611fc986828701611d0b565b9350506020611fda86828701611d0b565b9250506040611feb86828701611d0b565b9150509250925092565b60006120018383612098565b60208301905092915050565b6120168161294b565b82525050565b61202581612903565b82525050565b612034816128f1565b82525050565b6000612045826128a1565b61204f81856128c4565b935061205a83612891565b8060005b8381101561208b5781516120728882611ff5565b975061207d836128b7565b92505060018101905061205e565b5085935050505092915050565b6120a181612915565b82525050565b6120b081612915565b82525050565b6120bf8161295d565b82525050565b6120ce81612981565b82525050565b6120dd816129a5565b82525050565b60006120ee826128ac565b6120f881856128e0565b93506121088185602086016129ed565b61211181612a20565b840191505092915050565b60006121296020836128e0565b91507f54696d65416c6c793a204f6e6c79206465706c6f7965722063616e2063616c6c6000830152602082019050919050565b60006121696027836128e0565b91507f54696d65416c6c793a20496e76616c696420726577617264207479706520737060008301527f65636966696564000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006121cf6022836128e0565b91507f54696d65416c6c793a205374616b696e6720546f707570206973206661696c6960008301527f6e670000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006122356030836128e0565b91507f54696d65416c6c793a204c6971756964204553207472616e7366657220746f2060008301527f6f776e6572206973206661696c696e67000000000000000000000000000000006020830152604082019050919050565b600061229b601b836128e0565b91507f54696d65416c6c793a204f6e6c79204e52542063616e2073656e6400000000006000830152602082019050919050565b60006122db601f836128e0565b91507f536166654d6174683a204d756c7469706c696361746e206f766572666c6f77006000830152602082019050919050565b600061231b602b836128e0565b91507f54415374616b696e673a204f6e6c792050726570616964457320636f6e74726160008301527f63742063616e2063616c6c0000000000000000000000000000000000000000006020830152604082019050919050565b60006123816020836128e0565b91507f54696d65416c6c793a205374616b696e67206e6f74207265636f676e697a65646000830152602082019050919050565b60006123c1602c836128e0565b91507f54696d65416c6c793a20496e73756666696369656e74204e525420746f20707260008301527f6f636573732072657761726400000000000000000000000000000000000000006020830152604082019050919050565b6000612427601b836128e0565b91507f536166654d6174683a204164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b60006124676012836128e0565b91507f54696d65416c6c793a204e6f2076616c756500000000000000000000000000006000830152602082019050919050565b60006124a76000836128d5565b9150600082019050919050565b60006124c16022836128e0565b91507f54696d65416c6c793a2041646d696e206d6f6465206973206e6f74206163746960008301527f76650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b61252381612941565b82525050565b60006125348261249a565b9150819050919050565b6000602082019050612553600083018461202b565b92915050565b600060408201905061256e600083018561200d565b61257b602083018461251a565b9392505050565b6000604082019050612597600083018561202b565b6125a4602083018461251a565b9392505050565b600060c0820190506125c0600083018961202b565b6125cd602083018861251a565b6125da604083018761251a565b6125e7606083018661201c565b6125f4608083018561202b565b81810360a0830152612606818461203a565b9050979650505050505050565b600060208201905061262860008301846120a7565b92915050565b600060208201905061264360008301846120b6565b92915050565b600060208201905061265e60008301846120c5565b92915050565b600060208201905061267960008301846120d4565b92915050565b6000602082019050818103600083015261269981846120e3565b905092915050565b600060208201905081810360008301526126ba8161211c565b9050919050565b600060208201905081810360008301526126da8161215c565b9050919050565b600060208201905081810360008301526126fa816121c2565b9050919050565b6000602082019050818103600083015261271a81612228565b9050919050565b6000602082019050818103600083015261273a8161228e565b9050919050565b6000602082019050818103600083015261275a816122ce565b9050919050565b6000602082019050818103600083015261277a8161230e565b9050919050565b6000602082019050818103600083015261279a81612374565b9050919050565b600060208201905081810360008301526127ba816123b4565b9050919050565b600060208201905081810360008301526127da8161241a565b9050919050565b600060208201905081810360008301526127fa8161245a565b9050919050565b6000602082019050818103600083015261281a816124b4565b9050919050565b6000602082019050612836600083018461251a565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561285f57600080fd5b8060405250919050565b600067ffffffffffffffff82111561288057600080fd5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006128fc82612921565b9050919050565b600061290e82612921565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612956826129c9565b9050919050565b60006129688261296f565b9050919050565b600061297a82612921565b9050919050565b600061298c82612993565b9050919050565b600061299e82612921565b9050919050565b60006129b0826129b7565b9050919050565b60006129c282612921565b9050919050565b60006129d4826129db565b9050919050565b60006129e682612921565b9050919050565b60005b83811015612a0b5780820151818401526020810190506129f0565b83811115612a1a576000848401525b50505050565b6000601f19601f8301169050919050565b612a3a816128f1565b8114612a4557600080fd5b50565b612a5181612903565b8114612a5c57600080fd5b50565b612a6881612915565b8114612a7357600080fd5b50565b60038110612a8357600080fd5b50565b612a8f81612941565b8114612a9a57600080fd5b5056fea264697066735822122061b9e51a62f8cb9c65ebd999b8bb8f9000b829bdbe3a1791796d3ddc288c298064736f6c63430007000033';