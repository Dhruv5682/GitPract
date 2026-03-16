# Trainee Backend

This folder contains the backend part of the trainee project.

The backend is a small Node.js HTTP server that serves files from:

- `../trainee_frontend`

## Files

- `server.js`: Starts HTTP server on port `3000` and serves frontend files.
- `utils.js`: Helper for content-type mapping (`.html`, `.css`, `.js`).

## Requirements

- Node.js (recommended v16+)

Check Node version:

```bash
node -v
```

## How To Run Backend

From project root:

```bash
node trainee_backend/server.js
```

Or from this folder (`trainee_backend`):

```bash
node server.js
```

Server output:

```text
Server running at http://localhost:3000
```

## Backend Behavior

- `GET /` returns `index.html` from `trainee_frontend`.
- Static files like `/styles.css` are served with correct content type.
- Unknown paths return:

```text
404 - File not found
```

## Manual Testing

1. Start the server:

```bash
node server.js
```

2. In browser, open:

```text
http://localhost:3000
```

3. Test an existing asset:

```text
http://localhost:3000/styles.css
```

4. Test not found route:

```text
http://localhost:3000/does-not-exist
```

## Quick cURL Checks

From a second terminal while server is running:

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/styles.css
curl -i http://localhost:3000/does-not-exist
```

Expected:

- `/` -> `HTTP/1.1 200`
- `/styles.css` -> `HTTP/1.1 200`
- `/does-not-exist` -> `HTTP/1.1 404`
