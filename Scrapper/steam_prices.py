import requests
from bs4 import BeautifulSoup
import json
import pandas as pd
import datetime
import time

url= "https://store.steampowered.com/search/results/?query&start=50&count=50&dynamic_data=&sort_by=_ASC&supportedlang=english&snr=1_7_7_7000_7&filter=topsellers&infinite=1"

def total_results(url):
    r = requests.get(url)
    data = dict(r.json())
    total_results = data ["total_count"]
    return int(total_results)

def get_data(url):
    r = requests.get(url)
    data = dict(r.json())
    return data["results_html"]


def parse(data):
    all_steam_games = []
    soup = BeautifulSoup(data, "html.parser")
    games = soup.find_all("a", {"class": "search_result_row"})

    for game in games:
        title_tag = game.find("span", {"class": "title"})
        before_price_tag = game.find("div", {"class": "discount_original_price"})
        current_price_tag = game.find("div", {"class": "discount_final_price"})
        discount_pct_tag = game.find("div", {"class": "discount_pct"})
        id_tag = game.get("data-ds-appid")

        title = title_tag.text if title_tag else "No title found"
        before_price = before_price_tag.text.strip() if before_price_tag else "No discount"
        discount_pct = discount_pct_tag.text.strip() if discount_pct_tag else "No discount"
        price = current_price_tag.text.strip() if current_price_tag else "No price found"
        game_id = id_tag if id_tag else "No id found"

        steam_game_info = {
            "title" : title,
            "before_price": before_price,
            "discount_pct": discount_pct,
            "price": price,
            "game_id": game_id
        }
        all_steam_games.append(steam_game_info)

    return all_steam_games

def output(all_steam_games):
    gamesdf = pd.concat([pd.DataFrame(g) for g in results])
    now = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    gamesdf.to_csv(f"gameprices-{now}.csv", index=False)
    print("Finished saving to CSV")
    return

results = []
for x in range(0, total_results(url), 50):
    data = get_data(f"https://store.steampowered.com/search/results/?query&start={x}&count=50&dynamic_data=&sort_by=_ASC&supportedlang=english&snr=1_7_7_7000_7&filter=topsellers&infinite=1")
    results.append(parse(data))
    print("Results Scraped: ", x)
    time.sleep(1.5)

output(results)