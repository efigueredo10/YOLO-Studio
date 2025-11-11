🚀 Guia de Inicialização
✅ 1. Subir o banco de dados (Docker)
docker compose up -d

Verificar se está rodando:

docker ps

✅ 2. Ativar ambiente virtual
venv\Scripts\activate

✅ 3. Instalar dependências
pip install -r requirements.txt

✅ 4. Iniciar o servidor FastAPI
uvicorn app.main:app --reload

✅ 5. Acessar a API

Swagger UI: http://127.0.0.1:8000/docs

Redoc: http://127.0.0.1:8000/redoc
