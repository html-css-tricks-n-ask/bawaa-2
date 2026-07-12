import urllib.request
import re

def scrape_unsplash(query):
    url = f"https://unsplash.com/s/photos/{query.replace(' ', '-')}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode()
            # find photo ids like "images.unsplash.com/photo-123456789-abcdef?..."
            matches = re.findall(r'images\.unsplash\.com/photo-[a-zA-Z0-9\-]+', html)
            # return unique ones
            return list(set(matches))[:3]
    except Exception as e:
        print(f"Error {query}: {e}")
        return []

print("Hostel:", scrape_unsplash("hostel"))
print("Cabin:", scrape_unsplash("wooden-cabin"))
print("Pizza:", scrape_unsplash("pizza"))
print("Coffee:", scrape_unsplash("coffee"))
print("DJ Party:", scrape_unsplash("party"))
print("Yoga:", scrape_unsplash("yoga"))
