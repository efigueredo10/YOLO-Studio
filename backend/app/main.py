from fastapi import FastAPI
from .database import Base, engine
from . import models
from .routes import auth, users

# Cria tabelas automaticamente se não existirem
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Yolo Studio API")

app.include_router(auth.router)
app.include_router(users.router)
