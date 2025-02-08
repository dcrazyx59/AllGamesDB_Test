# import requests
# from bs4 import BeautifulSoup
# import json
# import pandas as pd
# import datetime
# import time

# url= "https://www.g2a.com/search/api/v3/products?itemsPerPage=50&include[0]=filters&currency=EUR&isWholesale=false&category=1&page=1"

# def get_data(url):
#     headers = {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7', 'Referer': 'https://www.g2a.com/search/api/v3/products?itemsPerPage=50&include[0]=filters&currency=EUR&isWholesale=false&category=1&page=2', 'Upgrade-Insecure-Requests': '1', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"Windows"'}
#     with requests.Session() as s:
#         try:
#             s.get("https://www.g2a.com/", headers=headers, timeout=10)

#             r = s.get(url, headers=headers, timeout=10)
#             r.raise_for_status()
#             print(r.json())

#         except requests.exceptions.HTTPError as e:
#             print(f"Error HTTP: {e}")
#             print(f"Respuesta del servidor: {e.response.text}")
#         except requests.exceptions.RequestException as e:
#             print(f"Error en la solicitud: {e}")

# get_data(url)

# from selenium_driverless import webdriver
# from selenium_driverless.types.by import By
# import asyncio
# from asynciolimiter import Limiter
# from selenium_driverless.scripts.network_interceptor import (
#     NetworkInterceptor,
#     InterceptedRequest,
#     RequestPattern,
# )

# async def on_request(data: InterceptedRequest):
#     if "api" in data.request.url:
#         # Print the request headers
#         print(f"Request Headers: {data.request.headers}")

# async def on_response(data):
#     # Check if the response belongs to an API request
#     if "api" in data['request']['url']:
#         # Make sure the response body is captured correctly
#         response = data['response']
#         if 'body' in response:
#             response_body = await response['body']
#             # Convert the binary response body into a string (UTF-8 encoded)
#             decoded_body = response_body.decode('utf-8')
#             try:
#                 # Parse the JSON content
#                 response_json = json.loads(decoded_body)
#                 print(f"Response JSON: {json.dumps(response_json, indent=2)}")  # Pretty print the JSON
#                 # You can now access the 'data' field if needed
#                 items = response_json.get("data", {}).get("items", [])
#                 print(f"Items: {items}")
#             except json.JSONDecodeError as e:
#                 print(f"Error decoding JSON: {e}")
#         else:
#             print("No response body available")

# async def scraper():
#     async with webdriver.Chrome() as browser:
#         async with NetworkInterceptor(browser, on_request=on_request, patterns=[RequestPattern.AnyRequest]) as interceptor:
#             # Set up the response interception
#             interceptor.on_response = on_response  # Attach response handler
            
#             # Access the API endpoint
#             await browser.get(
#                 "https://www.g2a.com/search/api/v3/products?itemsPerPage=50&include[0]=filters&currency=EUR&isWholesale=false&category=1&page=1",
#                 "https://www.g2a.com/search/api/v3/products?itemsPerPage=50&include[0]=filters&currency=EUR&isWholesale=false&category=1&page=2",
#                 "https://www.g2a.com/search/api/v3/products?itemsPerPage=50&include[0]=filters&currency=EUR&isWholesale=false&category=1&page=3"
#             )
#             await browser.sleep(4.0)

# asyncio.run(scraper())

# import requests

# session = requests.Session()
# session.headers.update({
#     "User-Agent": "...",
#     "Accept": "application/json, text/plain, */*",
#     "Referer": "https://www.g2a.com/"
# })
# session.cookies.set("your_cookie_name", "your_cookie_value")

# response = session.get("https://www.g2a.com/category/gaming-c1")


# {'Accept': '*/*', 'Cookie': 'skc=cdd7726e-07be-470b-9fd3-ab3be9f0387d-1738876973; bm_ss=ab8e18ef4e; language=es; sessionId=22a07184-1e1c-4a57-9d26-3658905c3a09; currency=EUR; store=spanish; bm_s=YAAQIFUQYM/9gbaUAQAACPck3QJjumZhhgRjuIfdZtUJtyDDVvrzGnTlHDPftgwTChnPmOgcjNWX4iBDuq/xTppET+PyBS4iBJzi1vjieYtZaD/o7uVv81wSz9Am+TuNXwXhW5phqg9aZZinqh2iOHPS7uZ0DMOPdvWnBUQZ9oZEUFhkCRERXrf3JfXGHxdRekq/+n9RHCEKSXcWrVOeAYNMEqRWREz5ElyUJZYIEevCYESi3AKDv4BIurd0fa9mFsKsXSngpJhzo8yTtE7D1XMOV81SxcuFTpXoH+/SzcnaDDTAJCDD/cg4Ckmi5qnk+atF8hOiBtYOmImpH1if5SDgkRLZQm/uE9KPHrIQgyeLsGJzl9xHU3w85I9Vb7CVPAchAMWXcEQdYMnaWwaI+AYmRDstr0ElBUJD2Ezx9BaxxsD0VqjW1tSJt/6Scn7GTwFvpdOxQHc=; bm_so=7EBB569479C716177ABC3BB780512E0E2EB3BD42B7B0BEA28E33816CA5BEE114~YAAQIFUQYND9gbaUAQAACPck3QK1yf4pdq0Uq5hjV6NUNsZ5NZkziV4tY7TClDL6FX5jMC9tfvUJcPP7yJSZL0yWGcmD2xD0W7NUmX5hxCEwAHPwRMuvPqwFFFlIhjb+y+oyQXzdxpzsBFjkhi6tO7GReZR1/VBw7lzMoTaA1jpR5K6hygEpiBxsJgoOLcgWVBAGvIO/1Vbrf9cyf1rl8ub3K1O+vt1OKyLDWi/sXszrqIt4Hh5ZVFTf7DJENjHwX4zHmNvrwWghrRRkvQQMR4uwGu2npuJGwCUApfxCCJq2tV0FRanHxGI6tIbJANjtwXNXHbNdvCxtfTOvM//VBSkRnaELcW7ftZeOjIB+H9vYGOXfgzv7eoTMmpzxaM2crft7RL4mXFng5QLd0T9JmG3E66Lpk+ll8xuzjNnLO2V2Q5akTx4Fq6BPwYb34pDb7NxectlWCKyMTA==; bm_sz=B2284FE358E581727690A1CC40CF4109~YAAQIFUQYNH9gbaUAQAACPck3RovhG/GmVOHpwWgw5aOvdtwJMFhWtP1QTflXoSgTAxRhFBXod58FO+ayQBL2CjScpYYVBlAXLAYrNhFCvEYrNDGRsKXBHtYevhAdEpa6JmGA0Mc4HAfif74ikhhp1i5ikMI+wuwH14LH5rETF0bmLXzAWQKm6X+Lc6WmCNsHcP2o9f0zcVrYSD426XTa8C9P8Bp5+UZVz+YpWmG/qReSmvzuW1j0uFlLSn9ObY307Fg3SSMS8Mn91v11tdkzzPLZjT1GP27h4PonCIF48cQES16U2MPHLO+rHE8z19mfrCA5JvFk/IQmEN16FH2GVP79FJpS/PU4KB0zewLEKkwzCQkQGVdNWyFuz5RFnP7J9xM4Y8cTHeHj1ytgraM~3553328~3487288; _abck=D68E0C1E4F9F10CCA9A0832E5E2B6E24~-1~YAAQIFUQYN79gbaUAQAATPck3Q1TYTLkHx4tq7bMzbJw+3gvC4GAcE6YTB9qwh/2nHj8EoHXTklS13DGspOF/+zePTNS41Iks9BGl7DMjnx1WICBrU2l8Vj4WIVfGwyjWruY5A5/jhdN0qQegXKWxATU8TiYHqetBRYQVBp+/cztDcN9kt7m2QQfjDMaVtxaSeOaPUjVN19ZnPfSeibC5mX7jay2Ifaws99ynGgrAndjadFESs6jzMwy1leXYGQdtpQbsjX9IRxwuZxaHZBrUcBnx/mf/1gN2+HeuKMTjdPfhtkK+KeC0i5lC4eYGJnnn9614p11xMFToS3/B98DQ25+X5g/40WQYMPT35mr/J0ZGuy3AlmaRMUACRtvghhKaZS50N3Qi5M9iZOi8wbRq1m4OGaVBt1mGoc8jwZD3MdORjsIvpjalN+DAzrR1XPnDRJo+2JR28bOGnRo9vQ1~-1~-1~-1; _vwo_uuid_v2=D93EA3CF1FE09C2F7AE0C1F5C9C8F700E|daf791dbc54a7dce596751ecae346b25; ak_bmsc=8965DB99D59DB2883B3C2DB98CE87DF4~000000000000000000000000000000~YAAQIFUQYOj9gbaUAQAAyPck3Rrvz0+Bc/WCxmo0NmmwH+UeQ82NzV6//iAnodG0gHHp4jyhBJqR6AFIP1ZhweagB+eLYU3fP6cyhnwbndqYDE2hIIvXCMia7im5NsWtRCfm92vFEKf3kGoWx8S6eht+5B9Ca1zakpUiei5cIDtbsCYIZ3E+DNrAXhApw7QsCOa+OeJEnF8RpQdbbattzEyC88NPoJzd3kBOThkYWVdMvL8jhigaIS3cvozo+QBY2+j+mkrVNTUcoEUmLNX84yoLNZUUf8+gjK+9Hbp0RDu4BcWvfNCMj74Ryrg+vMT0f7B7wJpsqtiQnPh4qzw8D7ID0gSXCWYjT5qpSrInIsEEURnS8Ivpb9gxS/ogkCur2YZande5/aUI4uDa6lDqjlZRYrjkXauqgAfW5yk45IO2iA==; _gcl_au=1.1.501398016.1738876976; __eoi=ID=2344681d36202378:T=1738876975:RT=1738876975:S=AA-AfjaRtPEtTlHRYzB-Nv1V8QQ_; _ga_W7LMVVT9XS=GS1.1.1738876976.1.0.1738876976.0.0.1413732529; _ga=GA1.1.1921471463.1738876977', 'Origin': 'https://www.g2a.com', 'Referer': 'https://www.g2a.com/', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"Windows"'}
# {'Accept': '*/*', 'Origin': 'https://www.g2a.com', 'Referer': 'https://www.g2a.com/', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"Windows"'}


import asyncio
from playwright.async_api import async_playwright
import random, datetime

def random_timer_interger():
    random_num = random.uniform(1, 3)
    print(random_num)
    return random_num

async def fetch_page_data(page_number):
    time = random_timer_interger()
    await asyncio.sleep(time)
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=False)
        context = await browser.new_context(viewport={"width": 1920, "height": 1080})
        page = await context.new_page()

        url = f"https://www.g2a.com/search/api/v3/products?itemsPerPage=50&include[0]=filters&include[1]=frodo&currency=EUR&isWholesale=false&category=189&f[platform][0]=1&sort=bestsellers-first&page={page_number}"
        await page.goto(url)

        # Extract JSON data from the page
        all_page_data = await page.evaluate("() => JSON.parse(document.body.innerText)")

        extracted_data = [
            {
                "basePrice": item["meta"]["basePrice"],
                "path": item["path"],
                "name": item["name"]
            }
            for item in all_page_data["data"]["items"]
        ]

        await browser.close()
        return extracted_data, time

async def main():
    all_extracted_data = []
    total_scraping_time = 0
    for page in range(1, 30):
        data, page_time = await fetch_page_data(page)
        total_scraping_time += page_time  
        all_extracted_data.extend(data)
    now = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    all_extracted_data.to_json(f"game_scrape_g2a-{now}.json", orient="records")
    print("Finished saving to JSON")
    print(f"Extracted data in: {total_scraping_time}")

asyncio.run(main())



#     with sync_playwright() as pw:
#         browser = pw.chromium.launch(headless=False)
#         context = browser.new_context(viewport={"width": 1920, "height": 1080})
#         page = context.new_page()

#         for page_num in range(1, pages + 1):
#             url = f"https://www.g2a.com/search/api/v3/products?itemsPerPage=50&include[0]=filters&include[1]=frodo&currency=EUR&isWholesale=false&category=189&f[platform][0]=1&sort=bestsellers-first&page={page_num}"
#             page.goto(url)

#             # Extract JSON data
#             data = json.loads(page.content())

#             # Navigate safely and extract relevant fields
#             items = data.get("data", {}).get("items", [])

#             for item in items:
#                 extracted_items.append({
#                     "name": item.get("name"),
#                     "basePrice": item.get("meta", {}).get("basePrice"),
#                     "path": item.get("path")
#                 })

#         browser.close()
    
#     return extracted_items

# # Run the function and print the result
# g2a_data = scrape_g2a_data()
# for item in g2a_data:
#     print(item)
