# Trainee Simple Website

This project is a beginner-friendly full-stack structure with:

- `trainee_backend`: Node.js backend scripts
- `trainee_frontend`: Simple frontend using HTML and CSS

The backend serves frontend files so you can open the website in your browser.

## Project Structure

```text
Git_Project1/
├── README.md
├── trainee_backend/
│   ├── server.js
│   └── utils.js
└── trainee_frontend/
	├── index.html
	└── styles.css
```

## Requirements

- Node.js (recommended: v16 or later)

Check your version:

```bash
node -v
```

## How To Run

From project root (`Git_Project1`), run:

```bash
node trainee_backend/server.js
```

If successful, you will see:

```text
Server running at http://localhost:3000
```

Now open your browser and go to:

```text
http://localhost:3000
```

## How To Test

There is no automated test framework configured yet.

Use manual testing:

1. Start the server with `node trainee_backend/server.js`.
2. Open `http://localhost:3000`.
3. Confirm the page loads with heading, paragraph, and button styling.
4. Try a non-existing route (for example `http://localhost:3000/abc`) and confirm you get `404 - File not found`.

## Notes

- Backend entry point: `trainee_backend/server.js`
- Content-type helper: `trainee_backend/utils.js`
- Frontend files are served from `trainee_frontend`

## Next Improvements (Optional)

- Add JavaScript interactivity in frontend (`script.js`)
- Add `package.json` with scripts like `npm start`
- Add automated tests for backend routes
