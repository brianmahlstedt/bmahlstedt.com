from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return '<center>GO NINERS</center>'
