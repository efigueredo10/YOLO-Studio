from pydantic import BaseSettings

class Settings(BaseSettings):
    APP_NAME='ModularDDD'
    DATABASE_URL='sqlite:///./test.db'

settings = Settings()