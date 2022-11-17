# Rest API + NodeJS + TS + MongoDB

## Instrukcje 

- Baze Mongo mam w dockerowym kontenerze sportowanym na port: 27017

- docker run --name mongodb -d -p 27017:27017 mongo

- Aby pobrac wszystkie paczki trzeba uzyc: npm install

- Następnie aby uruchomic serwer uzywam nodemon ktory jest zconfigurowany na ts-node: nodemon index.ts

## Layering

- Requesty są przekierowywane do Routera który następnie w Controllerze inicjuje operację w Service Layer który nastpęnie działa na Baza danych
- Request -> Router -> Controller -> Service -> Data Access Layer -> Service Layer -> Controller -> Router > Response

## Testing

- Do testowania korzystalem z Postmana