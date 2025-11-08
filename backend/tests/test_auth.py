import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.database import Base, engine, SessionLocal
from app import models
from app.auth import get_password_hash
client = TestClient(app)
@pytest.fixture(scope='module', autouse=True)
def prepare_db():
    # create tables in a temporary sqlite memory for tests
    Base.metadata.create_all(bind=engine)
    yield
    # teardown: drop tables
    Base.metadata.drop_all(bind=engine)
def test_register_login_profile():
    # register
    resp = client.post('/auth/register', json={'email': 'test@example.com', 'password': 'secret'})
    assert resp.status_code == 200
    data = resp.json()
    assert data['email'] == 'test@example.com'
    # login
    resp2 = client.post('/auth/login', json={'email': 'test@example.com', 'password': 'secret'})
    assert resp2.status_code == 200
    token = resp2.json()['access_token']
    assert token
    # profile
    headers = {'Authorization': f'Bearer {token}'}
    resp3 = client.get('/auth/profile', headers=headers)
    assert resp3.status_code == 200
    assert resp3.json()['email'] == 'test@example.com'