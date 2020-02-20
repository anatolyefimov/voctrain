import os

from flask import Flask
from flaskr.auth import bp
from flaskr.db import mongo



app = Flask(__name__, instance_relative_config=True)
app.config.from_mapping(
        MONGO_URI = "mongodb://localhost:27017/voctrain",
        SECRET_KEY='dev',
)

mongo.init_app(app)

try:
    os.makedirs(app.instance_path)
except OSError:
    pass

app.register_blueprint(bp)



