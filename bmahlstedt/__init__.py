from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return '<body style="background-image: url(https://i.ebayimg.com/images/g/ApsAAOSwJEpcp3zC/s-l300.jpg); background-position: center; background-repeat: no-repeat; background-size: 60%;">'
