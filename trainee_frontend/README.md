# Trainee Frontend

This folder contains the frontend part of the trainee project.

The frontend is built with:

- HTML (`index.html`)
- CSS (`styles.css`)

It is served by the backend server from `../trainee_backend/server.js`.

## Files

- `index.html`: Main webpage structure (heading, text, button).
- `styles.css`: Page styling (layout, colors, typography, button styles).

## How To View Frontend

Start backend server from project root:

```bash
node trainee_backend/server.js
```

Open in browser:

```text
http://localhost:3000
```

## Frontend Behavior

- The page displays a centered card layout.
- Title, paragraph, and button are visible.
- `styles.css` is loaded and applied to the page.

## Manual Testing Checklist

1. Run server:

```bash
node ../trainee_backend/server.js
```

2. Open:

```text
http://localhost:3000
```

3. Confirm UI checks:

- Heading text is visible.
- Paragraph text is visible.
- Button is styled and hover color changes.
- Page is centered and has background gradient.

4. Confirm stylesheet is served:

```text
http://localhost:3000/styles.css
```

You should see CSS content in the browser.

## Quick Improvement Ideas

- Add a `script.js` file for button interaction.
- Improve responsive typography for smaller screens.
- Add favicon and metadata in `index.html`.
