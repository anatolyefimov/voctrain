from flask import Blueprint, request

from flaskr.translate import translate as translate_api

bp = Blueprint('translate', __name__)

@bp.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()

    return translate_api(data['text'])
    