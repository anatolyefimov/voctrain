import os 
import requests

API_KEY = os.getenv('TRANSALTOR_API_KEY')

def translate(text):
    query = {
        'key': API_KEY,
        'lang': 'en-ru',
        'text': text
    }

    res = requests.get('https://translate.yandex.net/api/v1.5/tr.json/translate', query)
    data = res.json()
    
    return data