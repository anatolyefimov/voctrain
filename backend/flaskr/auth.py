from flask import Blueprint
from flask import jsonify, make_response
from bson.json_util import dumps

from flaskr.db import mongo

bp = Blueprint('auth', __name__)

@bp.route('/register')
def hello():
    