from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import ARRAY
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text_array = db.Column(db.ARRAY(db.String(20000)))

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "test": self.text_array,
            # do not serialize the password, its a security breach
        }

class Statement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=True)
    statement = db.Column(db.ARRAY(db.String(20000)))
    options = db.Column(db.ARRAY(db.String(2000)))
    statement_types = db.Column(db.ARRAY(db.String(150)))
    options_types=db.Column(db.ARRAY(db.String(150)))
    answer= db.Column(db.ARRAY(db.String(150)))
    source = db.Column(db.String(120), nullable=True)
    area=db.Column(db.String(120), nullable=True)
    institution=db.Column(db.String(120), nullable=True)
    isDifficult=db.Column(db.Boolean())
    isActive=db.Column(db.Boolean())
    isExplained=db.Column(db.Boolean())

    def __repr__(self):
        return '<Statement %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "statement": self.statement,
            "statement_types": self.statement_types,
            "options":self.options,
            "options_types":self.options_types,
            "answer" : self.correct,
            "isExplained": self.isExplained,
            "source": self.source,
            "isDifficult": self.isDifficult,
            "isActive":self.isActive,
            "area":self.area,
            "institution":self.institution
        }

class Answers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer)
    isCorrect=db.Column(db.Boolean())
    option=db.Column(db.String(500))
    time= db.Column(db.Integer)
    date= db.Column(db.Integer)#resolver esto

    def __repr__(self):
        return '<Answer %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "isCorrect": self.isCorrect,
            "option": self.option,
            "time":self.time,
            "date":self.date,
        }
