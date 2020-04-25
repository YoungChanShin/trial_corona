from flask import Flask, render_template,request
import requests
import bs4
from pprint import pprint

app = Flask (__name__)

@app.route('/')
def home():
    return 'hello world'
    
@app.route('/find_store')
def find_store():
    address=request.args.get('address')
    return render_template('index.html', address=address)

if __name__ == '__main__':
    app.run(debug=True)