from flask import Flask, request, Response
from service.mongoModel.userModel import UserModel

def initialize_user_api(app, prefix = ''):
	@app.route('/')
	def hello_world():
		return 'Hello world!'
    
	@app.route(prefix + '/getById/<id>')
	def getById():
		user = UserModel.objects().get(id=id).to_json()
		return Response(user, mimetype="application/json", status=200)

	@app.route(prefix + '/create', methods=['POST'])
	def create():
		body = request.get_json()
		user = UserModel(**body).save()
		id = user.id
		return {'id': str(id)}, 200

	@app.route(prefix + '/search', methods=['PUT'])
	def search():
		return '', 200
