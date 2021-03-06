from flask import (
    Blueprint, request, session
)
from bson.objectid import ObjectId
from bson.json_util import dumps

from flaskr.db.mongo import mongo

bp = Blueprint('user', __name__)

@bp.route('/get_user_data')
def get_user_data():
    user_id = session.get('user_id')
    if user_id:
        user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
        user['_id'] = user_id
        user.pop('password', None) 
        user['isLoggedIn'] = True
    else:   
        user = {
            'isLoggedIn': False,
            'username': '',
            'wordLists': []
        }
    
    return user

@bp.route('/update_word_lists', methods=['POST'])
def update_word_lists():

    data = request.get_json()
    user_id = session.get('user_id')
    mongo.db.users.update_one({'_id': ObjectId(user_id)}, {'$set' : {'wordLists': data}})
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
    user.pop('password')
    user['_id'] = str(user['_id'])
    user['isLoggedIn'] = True

    return user