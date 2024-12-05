# Podcast Manager API

Podcast Manager é uma API desenvolvida com o módulo nativo `http` do Node.js. Ela permite listar episódios de podcasts e buscar episódios específicos.

- Listar todos os episódios disponíveis.
- Buscar episódios específicos com base no nome do podcast.
- Retorno de status HTTP adequado quando não há resultados.

## Tecnologias Utilizadas

- Node.js
- TypeScript

## Endpoints

### 1. Listar todos os podcasts

**Método**: `GET`  
**URL**: `/api/list`

**Resposta**:

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "Inteligência",
    "episode": "LAMARTINE POSELLA - Inteligência Ltda. #1386",
    "videoId": "Wu5KB2ceNX4",
    "categories": ["religião"]
  }
]
```

### 2. Buscar um episódio específico

**Método**: `GET`
**URL**: `/api/podcasts?p=Inteligência`

**Resposta (quando encontrado):**

```json
[
  {
    "podcastName": "Inteligência",
    "episode": "LAMARTINE POSELLA - Inteligência Ltda. #1386",
    "videoId": "Wu5KB2ceNX4",
    "categories": ["religião"]
  }
]
```
