# Bun Clean Architecture

## Opis

Ten projekt jest przykładowym REST API napisanym w Bun.js z użyciem zasad Clean Architecture. Projekt demonstruje, jak zorganizować kod w sposób modularny i łatwy do utrzymania, z wyraźnym podziałem na warstwy odpowiedzialności.

## Struktura katalogów

```
Bun_Clean_Architecture/
│
├── src/
│   ├── entities/
│   │   └── User.ts
│   │
│   ├── usecases/
│   │   ├── CreateUser/
│   │   │   ├── CreateUser.ts
│   │   │   ├── CreateUserRequest.ts
│   │   │   └── CreateUserResponse.ts
│   │   │
│   │   └── GetAllUsers/
│   │       ├── GetAllUsers.ts
│   │       └── GetAllUsersResponse.ts
│   │
│   ├── repositories/
│   │   └── IUserRepository.ts
│   │
│   ├── adapters/
│   │   ├── controllers/
│   │   │   └── UserController.ts
│   │   ├── gateways/
│   │   │   └── InMemoryUserRepository.ts
│   │   └── presenters/
│   │       └── UserPresenter.ts
│   │
│   ├── frameworks/
│   │   └── BunServer.ts
│   │
│   └── main.ts
│
├── tests/
│   ├── usecases/
│   │   ├── CreateUser.test.ts
│   │   └── GetAllUsers.test.ts
│   └── repositories/
│       └── InMemoryUserRepository.test.ts
│
├── package.json
├── tsconfig.json
├── bunfig.toml
└── .prettierrc
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
{
  "users": [
    {
      "userId": "0195075c-22df-7000-bb08-b6a3a88a1c97",
      "userName": "John Doe",
      "userEmail": "john.doe@example.com"
    }
  ]
}
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
