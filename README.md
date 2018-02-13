# prepare
```
npm install
```
# ios with xcode
```
npm run ios
```
# android with ???
```
npm run android
```
# ios/android with EXPO.io
```
npm start
```
# web
```
npm run web
```
# electron
```
npm run electron
```
# electron → .exe
```
npm run pack:win
```
# electron → .app
```
npm run pack:mac
```
# deploy web → heroku
```
heroku login
heroku git:remote -a rss-reader-dev
git push heroku master
# ↓
# Procfile → npm run web
```