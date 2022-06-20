# AVR Wave Music App

Realizzazione del mockup visibile all'indirizzo https://dribbble.com/shots/17263646-Wave-Music-Streaming-App

## Implementazione

L'implementazione è stata sviluppata in angular.
Come build system è stato utilizzato nx (https://nx.dev/).
Per quanto riguarda le api di backend è stato scelto di utilizzare le api esposte dal sito jamendo (https://www.jamendo.com)

## Librerie addizionali utilizzate

- bootstrap -> Libreria utilizzata per la gestione del layout
- bootswatch -> Libreria basata su bootstrap che permette l'applicazione di temi css
- ngx-infinite-scroll -> Libreria usata per la gestione dello scrolling infinito (album, artisti)

## Struttura progetto

- apps/wave-music-app
  Applicazione angular che gestisce il layout generale, la navigazione (nav-bar).
- apis
  Libreria che implementa l'accesso alle api di jamendo
- artist-ui
  Libreria che implementa la sezione "Follow Artists"; che visualizza la lista di artisti. 
  Essa utilizza le api (/artists). Tale lista è implementata un infinite-scrolling
- recent-played
  Libreria che implementa la sezione "Recent Played"; che visualizza le ultime canzoni ascoltate. 
  Essa utilizza le api (/track). Tale lista è implementata un infinite-scrolling
- discovery-ui
  Libreria che implementa la sezione "Discovery"; che visualizza le canzoni ordinate per popolarità. 
  Essa utilizza le api (/track). Tale lista è implementata un infinite-scrolling
- user-ui
  Libreria in cui sarà implementanto l'user login.
- search-ui
  Libreria in cui sarà implementata la ricerca.

## Avvio
Per avviare l'applicazione posizionarsi nella root directory e lanciare il comando:
```bash
npx nx serve wave-music-app
```