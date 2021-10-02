import requests
from bs4 import BeautifulSoup
import lxml

from config import (
	AMAZON_HEADERS,
)


def is_prime(soup):
	return True if soup.find("span", { "id": "priceblock_dealprice" }) else False


def get_amazon_data(url):

	response = requests.get(url, headers={
		"User-Agent": AMAZON_HEADERS
	})

	soup = BeautifulSoup(response.text, "lxml")

	item_name = soup.find("span", { "id": "productTitle" }).text.replace("\n", " ").strip(" ")
	item_price = 0
	is_prime_deal = is_prime(soup)

	if is_prime_deal:
		item_price = float(soup.find("span", { "id": "priceblock_dealprice" }).text.replace(",", "").replace("₹", ""))
	else:
		item_price = float(soup.find("span", { "id": "priceblock_ourprice" }).text.replace(",", "").replace("₹", ""))

	item_rating = soup.find("span", { "id": "acrCustomerReviewText" }).text
	item_star = soup.find("span", { "class": "a-icon-alt" }).text
	item_site = url.split(".")[1].upper()

	return {
		"item_star": item_star,
		"item_name": item_name,
		"item_price": item_price,
		"item_rating": item_rating,
		"item_site": item_site,
		"url": url
	}
