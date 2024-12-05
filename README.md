# Podcast Manager API

Podcast Manager é uma API desenvolvida com o módulo nativo `http` do Node.js. Ela permite listar episódios de podcasts e buscar episódios específicos.

- Listar todos os episódios disponíveis.
- Buscar episódios específicos com base no nome do podcast.
- Retorno de status HTTP adequado quando não há resultados.

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
    "podcastName": "venus",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

### 2. Buscar um episódio específico

**Método**: `GET`
**URL**: `/api/podcasts?p=venus`

**Resposta (quando encontrado):**

```json
[
  {
    "podcastName": "venus",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```
