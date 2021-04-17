Basically, we can setup React Nnative environment with [official document](https://reactnative.dev/docs/environment-setup).

I will write additional tips about setup.

## Version control of Node.js

We will use Node.js to use React Native.

If we develop a product in the team, it is better to use same version of Node.js.

There are some tools to control Node.js version.

* [nvm](https://github.com/nvm-sh/nvm)
* [nodenv](https://github.com/nodenv/nodenv)
* [nodebrew](https://github.com/hokaccha/nodebrew)

`nodenv` is used in this repository, but any tool is okay.

If you want to install Node easily, you can installed node via Homebrew.

## Install watchman

```
$ brew install watchman
```

## Setup Project

You can setup React Native project now.

In the React Native project, we can make Expo or React Native project.

If you are familiar with iOS development, it would be better to start not Expo but React Native project as the [official document](https://reactnative.dev/docs/environment-setup).

The difference between Expo and React Native will be described later.

With the following command, React Native project can be setup.

```
$ npx react-native init ReactNativeInitialProject --template react-native-template-typescript
```

### Install node-modules with package manager

You can install node-modules with package management tool such as `npm` and `yarn`.

The following commands are yarn installation command.

```
$ npm install --global yarn
$ export PATH="$HOME/.npm_global/bin:$PATH # If you didn't export path
```

`npm` can be used by default, but `yarn` will be used in this repository, 

After installing yarn, you can install node-modules with the following command.

```
$ rm package-lock.json
$ yarn install
```

## Run on iOS Simulator

Now, you can run iOS simulator debug build with the following command.

```
$ yarn ios
```

### Tips

When you run this command, the other process is launched to launch local server in Terminal.app.

If you want to launch in the other App such as `iTerm`, [this stackoverflow link](https://stackoverflow.com/questions/37814803/how-to-get-react-native-run-ios-to-open-in-iterm-instead-of-terminal-on-a-macos) is useful.

## Appendix

* [Official document to setup React Native project](https://reactnative.dev/docs/environment-setup)
* [anyenv + macOS環境構築](https://qiita.com/rinpa/items/81766cd6a7b23dea9f3c)
