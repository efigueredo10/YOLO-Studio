# YOLO Studio — Fullstack Starter (FastAPI + Postgres + React Vite)

## Quickstart (local)
1. Copy `.env.template` to `.env` and edit if necessary.
2. Build and run DB + backend with Docker Compose:
   ```bash
   docker compose up --build
   ```
3. Install frontend deps and run dev:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Open frontend at http://localhost:5173 and backend docs at http://localhost:8000/docs

## Running tests (backend)
```bash
cd backend
pytest -q
```

## Notes
- Frontend reads `VITE_API_URL` for API base URL; default in code is http://localhost:8000.
- For production: build backend image and deploy to Cloud Run; deploy frontend to Firebase Hosting.