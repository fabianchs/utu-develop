  
import os
from flask_admin import Admin
from .models import db, User, Test, Answers, Statement, Administrator, Report
from flask_admin.contrib.sqla import ModelView
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

from api.routes_user import routes_user

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='UTÚ Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Test, db.session))
    admin.add_view(ModelView(Answers, db.session))
    admin.add_view(ModelView(Statement, db.session))
    admin.add_view(ModelView(Administrator, db.session))
    admin.add_view(ModelView(Report, db.session))

    app.register_blueprint(routes_user)
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
