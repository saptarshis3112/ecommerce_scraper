from flask import Flask, jsonify, request

from amazon_scraper import get_amazon_data
from flikart_scraper import get_flipkart_data

from config import (
	PORT,
	HOST,
)


app = Flask(__name__)


@app.route("/scrape_amazon", methods=['POST'])
def scrape_amazon():

	if request.method == "POST":

		data = request.get_json()

		if 'url' in data:
			url = data['url']
			site_data = get_amazon_data(url)
			return jsonify(site_data)

	return jsonify({})


@app.route("/scrape_flipkart", methods=['POST'])
def scrape_flipkart():

	if request.method == "POST":

		data = request.get_json()

		if 'url' in data:
			url = data['url']
			site_data = get_flipkart_data(url)
			return jsonify(site_data)

	return jsonify({})


if __name__ == "__main__":
	app.run(host=HOST, port=PORT)
