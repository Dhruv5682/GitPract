# Git_Project1

Simple trainee project with separate backend and frontend folders.

- `trainee_backend`: Node.js server scripts
- `trainee_frontend`: Website files (HTML and CSS)

The backend serves the frontend on `http://localhost:3000`.

## Project Structure

```text
Git_Project1/
├── README.md
├── trainee_backend/
│   ├── README.md
│   ├── server.js
│   └── utils.js
└── trainee_frontend/
	├── README.md
	├── index.html
	└── styles.css
```

## Requirements

- Node.js (recommended v16 or later)

Check Node installation:

```bash
node -v
```

## How To Run

From project root (`Git_Project1`):

```bash
node trainee_backend/server.js
```

If started correctly, terminal shows:

```text
Server running at http://localhost:3000
```

Open this URL in browser:

```text
http://localhost:3000
```

## How To Test

No automated tests are set up yet. Use manual checks:

1. Start server: `node trainee_backend/server.js`
2. Open `http://localhost:3000` and confirm page loads.
3. Open `http://localhost:3000/styles.css` and confirm CSS is served.
4. Open `http://localhost:3000/does-not-exist` and confirm `404 - File not found`.

Optional cURL checks:

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/styles.css
curl -i http://localhost:3000/does-not-exist
```

Expected status codes:

- `/` -> `200`
- `/styles.css` -> `200`
- `/does-not-exist` -> `404`

## Folder Documentation

- Backend details: `trainee_backend/README.md`
- Frontend details: `trainee_frontend/README.md`
