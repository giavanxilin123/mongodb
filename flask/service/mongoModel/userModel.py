import datetime
from ..dbMongo import db

class UserModel(db.Document):
	id = db.StringField(primary_key=True)
	password = db.StringField(required=True)
	username = db.StringField(required=True, unique=True)
	email = db.StringField()
	name = db.StringField()
	address = db.StringField()
	dob = db.DateTimeField(default=datetime.datetime.now)
	phone = db.DecimalField()
	role = db.StringField()
