# Contributing to [tsci](https://github.com/sametcelikbicak/tsci)

First off, thanks for taking the time to contribute! 🎉👍  

## How Can I Contribute?
It is publicly open for any contribution. Reporting bugs, suggesting
enhancements, bugfixes, new features and extras are welcome.

- To contribute to code: 
    - Fork the repo
    - Create a branch for your change(s)
    - Push your change(s) to your fork
    - Open a Pull Request(PR).
- To report a bug: If something does not work, please report it using
  [GitHub Issues](https://github.com/sametcelikbicak/tsci/issues).

## Development setup 🛠
Install dependencies first.
```
npm install
```
Build your changes.
``` 
npm run build
```

## Testing your changes 🧪
After your changes and run the build script you can install your changes locally and test the changes. First build your changes.
```
npm run build
```
Then you can test your changes in two ways. First you can check your changes below command
```
node ./lib/cli.js
```
Other option is install your changes locally and test it directly cli command like below.
```
npm install -g .
````
Then you can call cli command whenever you want inside your project folder or another test folder.
```
tsci
```
After your test if you want you can uninstall test cli from your machine with below command.
```
npm uninstall -g tsci
```

### Code of Conduct
This project and everyone participating in it is governed by the
[Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to
uphold this code. 
