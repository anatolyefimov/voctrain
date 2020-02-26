from flask import (
    Blueprint, request, session
)
from bson.objectid import ObjectId

from flaskr.db.mongo import mongo

bp = Blueprint('fetch', __name__)

@bp.route('/get_user_data')
def get_user_info():
    data = request.get_json()
    user_id = session.get('user_id')
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
    user['_id'] = user_id
    user.pop('password', None) 

    return user