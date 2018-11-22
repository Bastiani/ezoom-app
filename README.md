# ezoom-app

ReactNative app for api https://github.com/Bastiani/ezoom-backend (app) (Ezoom challenge)

## Install Watchman

- [Watchman](https://facebook.github.io/watchman/docs/install.html#installing-from-source)

## Install all requeriments for running android emulator

- [Alternative for Android Studio](https://medium.com/skyshidigital/install-react-native-without-android-studio-366317419e7e)
- [Emulator, Genymotion](https://www.genymotion.com/fun-zone/)

## Clone and run

```
git clone git@github.com:Bastiani/ezoom-app.git
cd ezoom-app
yarn
cd android
./gradlew assembleDebug
adb install app/build/outputs/apk/app-debug.apk (with emulator run or device)
cd ..
yarn update-schema
yarn relay
react-native start
```

## if app crash with network fails then run script into folder scripts

### And now open app in emulator or device connected in usb
