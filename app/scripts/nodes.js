'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    TEO: "TEO",
    ETH: "ETH",
    ETC: "ETC",
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
        'chainId': 34952,
        'tokenList': [],
        'abiList': [],
        'service': 'tao.foundation',
        'lib': new nodes.customNode('https://teonode1.tao.foundation', '')
    },
    'eth_mew': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherwallet.com/eth', '')
    },

    'etc_epool': {
        'name': 'ETC',
        'blockExplorerTX': 'https://gastracker.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': true,
        'chainId': 61,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'service': 'epool.io',
        'lib': new nodes.customNode('https://etc-geth.0xinfra.com', '')
    }
};
nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
