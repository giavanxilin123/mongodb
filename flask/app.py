import sys
sys.path.append("..")
from dotenv import load_dotenv, dotenv_values
from flask import Flask
from flask_bcrypt import Bcrypt
from service.dbMongo import initialize_db
from api import api

load_dotenv()
config = dotenv_values(".env")

app = Flask(__name__)
bcrypt = Bcrypt(app)
api['initialize_user_api'](app, '/user')

app.config['MONGODB_SETTINGS'] = {
    'host': config['MONGO_CONNECT']
}

initialize_db(app)

app.run(debug=True, port=config['PORT'])