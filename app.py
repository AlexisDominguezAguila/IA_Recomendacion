from flask import Flask, render_template, request, session
import os

from chatbot import respuesta

app = Flask(__name__)
app.secret_key = os.urandom(24)  

# Ruta para renderizar el formulario HTML
@app.route('/', methods=['GET', 'POST'])
def index():
    if 'history' not in session:
        session['history'] = []

    if request.method == 'POST':
        pregunta = request.form['pregunta']
        respuesta_bot = respuesta(pregunta)
        session['history'].append({'usuario': pregunta, 'bot': respuesta_bot})
        session.modified = True

    return render_template('index.html', history=session['history'])

if __name__ == '__main__':
    app.run(debug=True)
