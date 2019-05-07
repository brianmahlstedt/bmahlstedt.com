from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return '<img src="https://i.ebayimg.com/images/g/ApsAAOSwJEpcp3zC/s-l300.jpg" alt="Niners Helmet" style="margin: 10px auto; display: block;">'
