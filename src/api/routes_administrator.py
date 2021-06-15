import flask
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.models import db, Administrator, Test
from api.utils import generate_sitemap, APIException


routes_administrator = flask.Blueprint('routes_administrator', __name__)

@routes_administrator.route('/administrator/login', methods=['POST'])
def handle_login(): 

    username = request.json.get("username", None)
    password = request.json.get("password", None)

    if username is None:
        return jsonify({"message": "El nombre de usuario es requerido."}), 400

    if password is None:
        return jsonify({"message": "La contraseña es requerida"}), 400
    
    user = Administrator.query.filter_by(username=username, password=password).first()
    
    if user is None:
        # the user was not found on the database
        return jsonify({"message": "Error. Nombre de usuario o contraseña incorrectos."}), 401
    else:
        expiration_time = datetime.timedelta(days=1)
        access_token = create_access_token(identity=user.id,expires_delta=expiration_time)
        return jsonify({ "token": access_token, "user_id": user.id ,"is_admin_of_everything":user.is_admin_of_everything}), 200
