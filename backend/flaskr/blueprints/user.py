from flask import (
    Blueprint, request, session
)
from bson.objectid import ObjectId

from flaskr.db.mongo import mongo

bp = Blueprint('user', __name__)

@bp.route('/get_user_data')
def get_user_data():
    data = request.get_json()
    user_id = session.get('user_id')
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
    user['_id'] = user_id
    user.pop('password', None) 
    print(user)
    return user