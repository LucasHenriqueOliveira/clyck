# clyck
=======
Ionic App Base
=====================

Instale o `ionic` e o `cordova`:

```
npm install -g ionic cordova
```

Instale as dependências:

```
npm install
```

Instale os plugins com o comando:

```
npm install <nome_plugin>@<versao>
```

Para rodar o ionic no browser:

```
ionic serve
```

Para rodar o ionic no app:

```
cordova platform add ios (use este comando apenas uma vez para adicionar a plataforma)
```

```
ionic build ios
```

Depois abra o projeto no xcode e rode ele ou para rodar no simulador do mac use o comando:

```
ionic emulate ios
```