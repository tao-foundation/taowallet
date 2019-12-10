### TrustCoinWallet for TAO 

This wallet is customized for TAO Architecture and for [TEO Wallet]()

Original Version is trustcoinwallet
### [https://www.trustcoinwallet.com](https://www.trustcoinwallet.com)

### [Download the Latest Release](https://github.com/tao-foundation/taowallet/releases/latest)

### [Chrome Extension - you can make locally import package .zip file in chrome browser]


- taowallet-vX.X.X.X.zip is the smaller package containing the gh-pages branch aka TrustCoinWallet.com
- chrome-extension-vX.X.X.X.zip is the chrome extension package
- source code is the full source for developers

#### build wallet and add custom nodes in your PC
- Download this git  `git clone https://github.com/tao-foundation/taowallet.git`.
- Start by running `npm install`.
- Run `npm run dev`. Gulp will then watch & compile everything and then watch for changes to the HTML, JS, or CSS.
- For distribution, run `npm run dist`.

#### TrustCoinWallet.com & CX .Zip & src are licensed under The MIT License (MIT).

Base fork is MEW ( [MyEtherWallet](https://www.myetherwallet.com) )


-------------------------------------------------------------

<br>






### MEW Around the Web

- [Website: https://www.myetherwallet.com/](https://www.myetherwallet.com/)
- [CX: https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm](https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm)
- [Anti-phish CX](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn)
- [FB: https://www.facebook.com/MyEtherWallet/](https://www.facebook.com/MyEtherWallet/)
- [Twitter: https://twitter.com/myetherwallet](https://twitter.com/myetherwallet)
- [Medium: https://medium.com/@myetherwallet_96408](https://medium.com/@myetherwallet_96408)
- [Help Center: https://myetherwallet.groovehq.com/help_center](https://myetherwallet.groovehq.com/help_center)
- [Github MEW Repo: https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet)
- [Github MEW Org: https://github.com/MyEtherWallet](https://github.com/MyEtherWallet)
- [Github Pages URL: https://kvhnuke.github.io/etherwallet/](https://kvhnuke.github.io/etherwallet/)
- [Github Latest Releases: https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest)
- [Github Anti-phish CX: https://github.com/409H/EtherAddressLookup](https://github.com/409H/EtherAddressLookup)
- [Slack: https://myetherwallet.slack.com/ & https://myetherwallet.herokuapp.com/](https://myetherwallet.slack.com/ & https://myetherwallet.herokuapp.com/)
- [Reddit: https://www.reddit.com/r/MyEtherWallet/](https://www.reddit.com/r/MyEtherWallet/)
- [tayvano (founder) reddit: https://www.reddit.com/user/insomniasexx/](https://www.reddit.com/user/insomniasexx/)
- [kvhnuke (founder) reddit: https://www.reddit.com/user/kvhnuke/](https://www.reddit.com/user/kvhnuke/)
- [jordan (cmo) reddit: https://www.reddit.com/user/trogdortb001](https://www.reddit.com/user/trogdortb001)
- [myetherwallet reddit user: https://www.reddit.com/user/myetherwallet](https://www.reddit.com/user/myetherwallet)
-  MEW ETH Donation Address: 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 (mewtopia.eth)
-  MEW BTC Donation Address: 1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6

### Refer on features and MEW Philosophy [here](https://myetherwallet.com)

### Users (non-developers)

- [It is recommended you start here.](https://myetherwallet.groovehq.com/knowledge_base/categories/getting-started-443)
- You can run MyEtherWallet.com on your computer. You can create a wallet completely offline & send transactions from the "Offline Transaction" page.

1. Go to https://github.com/kvhnuke/etherwallet/releases/latest.
2. Click on dist-vX.X.X.X.zip.
3. Move zip to an airgapped computer.
4. Unzip it and double-click index.html.
5. MyEtherWallet.com is now running entirely on your computer.

In case you are not familiar, you need to keep the entire folder in order to run the website, not just index.html. Don't touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.

As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo.




### Developers

If you want to help contribute, here's what you need to know to get it up and running and compiling.

- Both the Chrome Extension and the MyEtherWallet.com are compiling from the same codebase. This code is found in the `app` folder. Don't touch the `dist` or `chrome-extension` folders.
- We use angular and bootstrap. We used to use jQuery and Bootstrap until it was converted in April 2016. If you wonder why some things are set up funky, that's why.
- The mercury branch is currently the active development branch. We then push the dist folder live to gh-pages, which then gets served to MyEtherWallet.com.
- We use npm / gulp for compiling. There is a lot of stuff happening in the compliation.
- Old node setups can be found in in `json_relay_node` (node.js) & `json_relay_php` (php). These are great resources for developers looking to get started and launch a public node on a $40 linode instance.

**Getting Started**

- Start by running `npm install`.
- Run `npm run dev`. Gulp will then watch & compile everything and then watch for changes to the HTML, JS, or CSS.
- For distribution, run `npm run dist`.

**Folder Structure**
- `fonts` and `images` get moved into their respective folders. This isn't watched via gulp so if you add an image or font, you need to run `gulp` again.
- `includes` are the pieces of the pages / the pages themselves. These are pretty self explanatory and where you will make most frontend changes.
- `layouts` are the pages themselves. These basically take all the pieces of the pages and compile into one massive page. The navigation is also found here...sort of.
    * `index.html` is for MyEtherWallet.com.
    * `cx-wallet.html` is the main page for the Chrome Extension.
    * `embedded.html` is for https://www.myetherwallet.com/embedded.html.

- You can control what shows up on MyEtherWallet.com vs the Chrome Extension by using: `@@if (site === 'cx' )  {  ...  }` and `@@if (site === 'mew' ) { ... }`. Check out `sendTransaction.tpl` to see it in action. The former will only compile to the Chrome Extension. The latter only to MyEtherWallet.com.
- `embedded.html` is for embedding the wallet generation into third-party sites. [Read more about it and how to listen for the address generated here.](https://www.reddit.com/r/ethereum/comments/4gn37o/embeddable_myetherwallet_super_simple_wallet/)
- The wallet decrypt directives are at `scripts/directives/walletDecryptDrtv.js`. These show up on a lot of pages.
- The navigation is in `scripts/services/globalServices.js`. Again, we control which navigation items show up in which version of the site in this single file.
- As of September 2016, almost all the copy in the .tpl files are only there as placeholders. It all gets replaced via angular-translate. If you want to change some copy you need to do so in `scripts/translations/en.js` folder. You should also make a note about what you changed and move it to the top of the file so that we can make sure it gets translated if necessary.
- `styles` is all the less. It's a couple custom folders and bootstrap. This badly needs to be redone. Ugh.



### Use Your Own Servers / Node Guide

- [Setting up on AWS super easily.](https://github.com/MyEtherWallet/docker-geth-lb)

- [Running MyEtherWallet w/ Your Own Personal Node](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-connect-to-a-custom-node)

- [Guide by benjaminion for MEW + Ledger Nano S + Local Parity Node](https://github.com/benjaminion/eth-parity-qnap/wiki/Connecting-to-MyEtherWallet)

**Old**

- https://github.com/kvhnuke/etherwallet/issues/226.

- [Announcing MyEtherWallet v3.4: The Node Switcher](https://www.reddit.com/r/ethereum/comments/5lqx90/announcing_myetherwallet_v34_the_node_switcher/)**





### How to Help Translate

**A couple of notes:**

- Everything on the entire site is broken down into lines and in this one file. The uppermost items are the highest priority and the further you go down, the less of a priority it is.
- You can add comments anywhere by wrapping it in /* Your Comment Here */. If you want to leave a note for yourself or someone else, do so in this format. That way it doesn't screw up the code or show up somewhere on the site.
- Don't delete any lines. Just leave it in English if you don't know how to translate it.
- Always make sure each line ends with `',`. So the format is `NAME: ' your text here ',` You only need to change the `your text here` part - try not to touch anything else.

**If you are NOT a developer and have no idea how this works:**

Anyone can help out and it looks way more complicated than it is! If you would rather not deal with Github, please just email us a info@myetherwallet.com and I'll email you the file and you can make changes and send it back to us and I'll make sure you don't screw anything up. If you feel like experiencing something new, read on!

1. Sign into your Github account or make a new Github account.
2. Go to https://github.com/kvhnuke/etherwallet/tree/mercury/app/scripts/translations
3. Click on the language file you want to update.
4. Look in the upper right. Click the pencil icon. This will then tell you, *"You’re editing a file in a project you don’t have write access to. We’ve created a fork of this project for you to commit your proposed changes to. Submitting a change to this file will write it to a new branch in your fork, so you can send a pull request."* Ignore it all.
5. In your browser, start translating. Translate as little or as much as you want.
6. Scroll down about halfway to the translators section. Enter your name/username, donation address, and any comments you would like to leave.
7. When you are done, tell us what language you updated. You can also leave any notes about problems you had or things you'd like us to know.
8. Click the green "Propose File change" button.
9. This next page is a review of what you did.
10. Click the "Create Pull Request" button.....twice. [Screenshot](https://ipfs.pics/ipfs/QmZJJvPxXu7BFHDQ1zj1a73EATQETbsDuAJVEJnatTHrms).
11. That's it. You successfully made a new pull request! Tell all your friends.
12. We will now review it and pull it in and it will be made live on the site. We may also ask you questions if something is confusing for whatever reason.

**If you are a developer and familiar with GitHub, Pull Requests, and know how to save a JS file as a .js file rather than a Word Doc:**

1. Clone the [mercury branch](https://github.com/kvhnuke/etherwallet/tree/mercury).
2. Go to `/app/scripts/translations/`.
3. Open the language you want to translate.
4. Translate as much or as little as you wish.
5. Add your name/username, donation address, and any notes you would like on in the translators section, about halfway down.
6. Open a PR and leave us a brief description of what you did and any issues you ran into or comments you have.

Read more @ [Help us translate MyEtherWallet.com into ALL THE LANGUAGES!](https://www.reddit.com/r/ethereum/comments/4z55s2/help_us_translate_myetherwalletcom_into_all_the/)




#### trustcoinwallet.com & wallet.tao.foundation , trustcoinWallet , taowallet CX are licensed under The MIT License (MIT).
