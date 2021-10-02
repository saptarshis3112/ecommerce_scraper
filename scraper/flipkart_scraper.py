import requests
from bs4 import BeautifulSoup
import lxml

from config import (
    FLIPKART_HEADERS,
)


def get_flipkart_data(url):

    response = requests.get(url, headers={
        "User-Agent": FLIPKART_HEADERS
    })

    soup = BeautifulSoup(response.text, "lxml")

    item_site = url.split(".")[1].upper()

    return {
        "url": url
    }
