from fastapi import APIRouter
router = APIRouter(prefix="/users", tags=["users"])
@router.get('/me')
def me():
    return {'msg': 'implement user fetch via token dependency'}