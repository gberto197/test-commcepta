# app

## Project setup
Após clonado o repositório
```
cd test-commcepta
```
na pasta test-commcepta execute o comando
```
yarn install
```
após isso é preciso subir o json-server que cuidará dos dados
```
json-server --watch src/dados/dados.json
```
em outro terminal, dentro da pasta test-commcepta
```
yarn serve
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
