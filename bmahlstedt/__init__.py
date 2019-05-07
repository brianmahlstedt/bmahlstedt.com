from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return '<h3>Coming soon!<br>- Brian</h3>'
