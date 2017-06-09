# UEK SPA Spotify


## Opis projektu

Aplikacja wykonana w ramach projektu miała za zadanie realizować poniższe funkcjonalności:

1. wyszukiwanie albumów z bazy Spotify
1. wyświetlanie okładek albumów muzycznych
1. wyświetlanie szczegółów dotyczących poszczególnych albumów: lista utworów w albumie, wykonawca itd
1. tworzenie własnych playlist złożonych z różnych utworów
1. możliwość ustawienia playlisty jako ulubionej
1. możliwość dodania/etycji/usunięcia utworu z playlisty
1. odtworzenie wybranego utworu z poziomu przeglądarki

[Spotify WebAPI](https://developer.spotify.com/web-api/)

## Wykorzystane technologie (wymagania)

* [Angular](https://angular.io/) version 4.0.0
* [Node.js](https://nodejs.org/) version 7.10.0
* [NPM](https://www.npmjs.com/) version 4.2.0
* [JSON Server](https://github.com/typicode/json-server) version 0.10.1

## Instalacja

`npm install -g @angular/cli@latest`

`npm install -g json-server`

`npm install`

`json-server --watch ./mockup/spotify_endpoints.json`

`ng serve`

## Przebieg projektu

W ramach rozwoju projektu napotkaliśmy na szareg przeciwności w tym na kluczową - zmianę sposobu autoryzacji i autentykacji w wykorzystywanym API. Wspomniana zmiana wymuszała konieczność użycia protokołu OAUth2.0. W związku z powyższą przeszkodą, w ramach rozwoju projektu podjęliśmy decyzję o wystawieniu własnego API, imitującego działanie pierwotnie założonego.

## Autorzy

* Mateusz Lis
* Dominik Kubis