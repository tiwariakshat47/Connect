from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app) 

@app.route('/scrape', methods=['GET'])
def scrape():
    url = request.args.get('url')
    if not url:
        return jsonify({'error': 'URL parameter is required'}), 400
    response = requests.get(url)
    response.raise_for_status() 
    soup = BeautifulSoup(response.content, 'html.parser')
    data = [li.get_text() for li in soup.find_all('li')]

    return jsonify({'htmlContent': '<ul>' + ''.join([f'<li>{item}</li>' for item in data]) + '</ul>'})

if __name__ == "__main__":
    app.run(debug=True)