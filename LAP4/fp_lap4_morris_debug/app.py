from flask_mail import Message, Mail
from flask import jsonify, redirect, render_template, request, Flask
from lego_prediction import pricer
from flask_cors import CORS
from werkzeug import exceptions
from mailers import mail_config
import pdb

app = Flask(__name__)
CORS(app)


mail = mail_config(app)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/prediction', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        piece_count = request.form['piece_count']
        result = pricer.predict(request.form['piece_count'])
        return render_template('predict.html', default=0, result=result, piece_count=piece_count)
    else:
        return render_template('predict.html', default=0, result=0, title='Predict')


@app.route('/reminder', methods=['POST'])
def reminder():
    if request.method == 'POST':
        # pdb.set_trace()
        piece_count = request.form['piece_count']
        result = request.form['result']
        to_email = request.form['to_email']
        msg = Message("Your LegOh! prediction is here!",
                      sender="LegOh@example.com",
                      recipients=[to_email])
        msg.html = render_template(
            'mailers/your_result.html', piece_count=piece_count, result=result)
        # msg.html = "<b>testing</b>"
        mail.send(msg)
        return render_template('thankyou.html')
    else:
        return render_template('predict.html', default=0, result=0, title='Predict')


@app.errorhandler(exceptions.NotFound)
def handle_404():
    return render_template('404.html'), 404


@app.errorhandler(exceptions.BadRequest)
def handle_400():
    return render_template('predict.html'), 400


@app.errorhandler(exceptions.InternalServerError)
def handle_500():
    return render_template('500.html'), 500


if __name__ == "__main__":
    app.run(debug=True)
