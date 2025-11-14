# GraphQL Workspace

This workspace contains two projects:

## Server (`/server`)

GraphQL server application

### Running the server:

```bash
cd server
npm install  # if needed
npm start
```

## Client (`/client`)

GraphQL client application

### Running the client:

```bash
cd client
npm install
npm start
```

## Development Workflow

1. Start the GraphQL server first:

   ```bash
   cd server && npm start
   ```

2. In a separate terminal, start the client:
   ```bash
   cd client && npm start
   ```

The server typically runs on `http://localhost:9000` and the client connects to it.
