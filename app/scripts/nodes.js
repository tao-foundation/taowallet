'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    TEO: "TEO",
    ETH: "ETH",
    ETC: "ETC",
    TEOt: "TEOt",
    Custom: "CUSTOM TAO"
};
nodes.ensNodeTypes = [nodes.nodeTypes.TEO,nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'teo': {
        'name': 'TEO',
        'blockExplorerTX': 'https://explorer.tao.foundation/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.tao.foundation/addr/[[address]]',
        'type': nodes.nodeTypes.TEO,
        'eip155': true,
        'chainId': 33416,
        'tokenList': [],
        'abiList': [],
        'service': 'TAO.Foundation',
        'lib': new nodes.customNode('https://teonode1.tao.foundation', '')
    },
    'eth_tao': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'TAO.Foundation',
        'lib': new nodes.customNode('https://ethapi1.tao.foundation', '')
    },
    'etc_tao': {
        'name': 'ETC',
        'blockExplorerTX': 'https://blockscout.com/etc/mainnet/tx/[[txHash]]',
        'blockExplorerAddr': 'https://blockscout.com/etc/mainnet/address/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': true,
        'chainId': 61,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'service': 'TAO.Foundation',
        'lib': new nodes.customNode('https://etcapi1.tao.foundation', '')
    },
    'teo_test': {
        'name': 'TEOt',
        'blockExplorerTX': 'https://teoexplorer.tao.ac/tx/[[txHash]]',
        'blockExplorerAddr': 'https://teoexplorer.tao.ac/account/[[address]]',
        'type': nodes.nodeTypes.TEOt,
        'eip155': true,
        'chainId': 33410,
        'tokenList': require('./tokens/teotTokens.json'),
        'abiList': require('./abiDefinitions/teotAbi.json'),
        'service': 'tao.ac',
        'lib': new nodes.customNode('https://teotest.tao.ac/', '')
    }
};
nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
