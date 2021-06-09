"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import flask
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.models import db, User,Test
from api.utils import generate_sitemap, APIException


routes_user = flask.Blueprint('routes_user', __name__)


@routes_user.route('/user/login', methods=['POST', 'GET'])
def handle_login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email is None:
        return jsonify({"message": "El email es requerido."}), 400

    if password is None:
        return jsonify({"message": "El password es requerido."}), 400
    
    user = User.query.filter_by(email=email, password=password).first()
    
    if user is None:
        # the user was not found on the database
        return jsonify({"message": "El email o el password son inválidos."}), 401
    else:
        expiration_date = datetime.timedelta(days=1)
        access_token = create_access_token(identity=user.id,expires_delta=expiration_date)
        return jsonify({ "token": access_token, "user_id": user.id }), 200


@routes_user.route('/user/register', methods=['POST'])
def handle_register():

    response_body = {
        "message": "Hello! I'm a message that came from the routes_user"
    }

    return jsonify(response_body), 200



@routes_user.route('/api/usertest', methods=['POST'])
def handle_test():
    test = request.json.get("test", None)
    new_test= Test()
    new_test.text_array=test
    db.session.add(new_test)
    db.session.commit()

    response_body = {
        "message": new_test.text_array
    }

    return jsonify(response_body), 200