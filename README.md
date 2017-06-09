# UEK SPA Spotify


## Opis projektu

Aplikacja wykonana w ramach projektu miała za zadanie realizować poniższe funkcjonalności:

1. wyszukiwanie albumów z bazy Spotify
1. wyświetlanie okładek albumów muzycznych
1. wyświetlanie szczegółów dotyczących poszczególnych albumów: lista utworów w albumie, wykonawca itd
1. tworzenie własnych playlist złożonych z różnych utworów
1. możliwość ustawienia playlisty jako ulubionej
1. możliwość dodania/edycji/usunięcia utworu z playlisty
1. odtworzenie wybranego utworu z poziomu przeglądarki

## Wykorzystane technologie (wymagania)

* [Spotify WebAPI](https://developer.spotify.com/web-api/)
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

## Skrócona instrukcja obsługi

1. Zbiór danych dostępnych na stronie został wykreowany na potrzeby testów oraz prezentacji aplikacji.
1. Wyszukiwanie albumów odbywa się z użyciem formularza dostępnego pod URI: /music. Jest to strona domyślna, uruchamiana po otwarciu strony. Do omawianej strony możemy przejść po kliknięciu z zakładkę "Szukaj muzyki" dostępną w pasku nawigacyjnym w górnej częsci strony. Poniżej formularza wyświetla się lista albumów spełniających kreteria wyszukiwania. Aby zobaczyć widok szczegółowy albumu należy kliknąć na okładkę albumu w wynikach wyszukiwania.
1. Wyświetlanie szczegółów albumu jest realizowany w widoku music/album/:id, gdzie :id to parametr określający identyfikator albumu. W widoku szczegółowym możemy zobaczyć okładkę, listę utworów oraz odsłuchać wybrane pozycje.
1. Zarządzanie playlistami odbywa się w widoku dostępnym pod URI: /playlist. Do omawianej strony możemy przejść po kliknięciu w zakładkę "Twoje Playlisty" dostępną w pasku nawigacyjnym w górnej częsci strony. Dostępny zbiór playlist użytkownika umożliwia oznaczenie playlisty jako ulubionej, podgląd jej szczegółów po kliknięciu na wybraną playlistę oraz odtworzenie wybranych utworów. Ponadto możemy edytować cechy playlisty po kliknęciu w przcysk "Edytuj" widoczny pod listą utworów.

## Przebieg projektu

W ramach rozwoju projektu napotkaliśmy na szareg przeciwności w tym na kluczową - zmianę sposobu autoryzacji i autentykacji w wykorzystywanym API. Wspomniana zmiana wymuszała konieczność użycia protokołu OAUth2.0. W związku z powyższą przeszkodą, w ramach rozwoju projektu podjęliśmy decyzję o wystawieniu własnego API, imitującego działanie pierwotnie założonego.

## Autorzy

* Mateusz Lis
* Dominik Kubis