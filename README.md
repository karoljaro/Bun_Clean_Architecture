# Bun Clean Architecture

## Opis

Ten projekt jest przykładowym REST API napisanym w Bun.js z użyciem zasad Clean Architecture. Projekt demonstruje, jak zorganizować kod w sposób modularny i łatwy do utrzymania, z wyraźnym podziałem na warstwy odpowiedzialności.

## Struktura katalogów

```
src/
├── entities/          # Klasy domenowe
│   └── User.ts
├── useCases/          # Logika biznesowa
│   └── UserUseCase.ts
├── controllers/       # Kontrolery HTTP
│   └── UserControllers.ts
├── routes/            # Definicje tras
│   └── UserRoutes.ts
├── repositories/      # Repozytoria danych
│   └── UserRepository.ts
└── index.ts           # Główny plik uruchamiający serwer
tests/                 # Testy jednostkowe i integracyjne
├── entities/
│   └── User.test.ts
├── useCases/
│   └── UserUseCase.test.ts
├── controllers/
│   └── UserControllers.test.ts
├── routes/
│   └── UserRoutes.test.ts
├── repositories/
│   └── UserRepository.test.ts
```

## Instalacja

Aby zainstalować zależności, uruchom:

```bash
bun install
```

## Uruchamianie

Aby uruchomić serwer, użyj:

```bash
bun dev
```

Serwer będzie nasłuchiwał na porcie 3000.

## Endpointy API

### GET /users

Zwraca listę wszystkich użytkowników.

**Przykład żądania:**

```bash
curl -X GET http://localhost:3000/users
```

**Przykład odpowiedzi:**

```json
[
    {
        "id": "0195064d-8f2a-74f6-a3d1-6c08b6791724",
        "name": "John Doe",
        "email": "john.doe@example.com"
    }
]
```

### POST /users

Tworzy nowego użytkownika.

**Przykład żądania:**

```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john.doe@example.com"}'
```

**Przykład odpowiedzi:**

```json
{
    "name": "John Doe",
    "email": "john.doe@example.com"
}
```

## Testowanie

Aby uruchomić testy, użyj:

```bash
bun test
```

## Licencja

Ten projekt jest licencjonowany na warunkach licencji MIT. Zobacz plik [LICENSE](./LICENSE) po więcej informacji.
