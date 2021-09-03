import flask
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.models import db, User,Test
from api.utils import generate_sitemap, APIException

routes_statements= flask.Blueprint('routes_statements', __name__)

