import urllib.request
import re

def search_pexels(query):
    url = f"https://www.pexels.com/search/{urllib.parse.quote(query)}/"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode()
            # Find URLs like https://images.pexels.com/photos/12345/pexels-photo-12345.jpeg
            urls = re.findall(r'https://images\.pexels\.com/photos/\d+/[^"\'\s]+\.(?:jpeg|jpg|png)', html)
            return list(set(urls))[:5]
    except Exception as e:
        print(f"Error: {e}")
        return []

print("Hostel:", search_pexels("hostel"))
print("Mountains:", search_pexels("mountains"))
