import os
import re

replacements = {
    "1527192491265-7e15c55b1ed2": "https://loremflickr.com/1200/800/coworking?lock=1",
    "1524661135-423995f22d0b": "https://loremflickr.com/1200/800/map?lock=2",
    "1497935586351-b67a49e012bf": "https://loremflickr.com/1200/800/coffee,pour?lock=3",
    "1461023058943-0708e52235eb": "https://loremflickr.com/1200/800/macchiato?lock=4",
    "1565299624946-b28f40a0ae38": "https://loremflickr.com/1200/800/pizza,mushroom?lock=5",
    "1574071318508-1cdbab80d002": "https://loremflickr.com/1200/800/pizza,margherita?lock=6",
    "1541519227354-08fa5d50c44d": "https://loremflickr.com/1200/800/avocado,toast?lock=7",
    "1590301157890-4810ed352733": "https://loremflickr.com/1200/800/acaibowl?lock=8",
    "1531631551829-fbf5eb305c45": "https://loremflickr.com/1200/800/rafting?lock=9",
    "1599901860904-17e6ed7083a0": "https://loremflickr.com/1200/800/yoga,sunrise?lock=10",
    "1516450360452-9312f5e86fc7": "https://loremflickr.com/1200/800/dj,party?lock=11",
    "1554118811-1e0d58224f24": "https://loremflickr.com/1200/800/cafe,mountain?lock=12",
    "1598928506311-c55dd70c6576": "https://loremflickr.com/1200/800/cabin,mountain?lock=13",
    "1522771731470-ea4322436d40": "https://loremflickr.com/1200/800/hostel,dorm?lock=14",
    "1631049307264-da0ec9d70304": "https://loremflickr.com/1200/800/bedroom,cozy?lock=15",
    "1611892440504-42a792e24d32": "https://loremflickr.com/1200/800/cabin,interior?lock=16",
    "1555854877-bab0e564b8d5": "https://loremflickr.com/1200/800/hostel,lounge?lock=17",
    "1590490360182-c33d57733427": "https://loremflickr.com/1200/800/hostel,bunk?lock=18",
    "1505691938895-1758d7bef511": "https://loremflickr.com/1200/800/hostel,room?lock=19",
    "1582719508461-905c673771fd": "https://loremflickr.com/1200/800/hostel,bed?lock=20",
    "1618221118493-9cfa1a1c00da": "https://loremflickr.com/1200/800/bedroom,mountain?lock=21",
    "1595526114035-0d45ed16cfbf": "https://loremflickr.com/1200/800/bedroom,modern?lock=22",
    "1582719478250-c89cae4dc85b": "https://loremflickr.com/1200/800/bedroom,wood?lock=23",
    "1631049035182-249067d7618e": "https://loremflickr.com/1200/800/bedroom,view?lock=24",
    "1514525253161-7a46d19cd819": "https://loremflickr.com/1200/800/acoustic,music?lock=25",
    "1478147427282-58a87a120781": "https://loremflickr.com/1200/800/bonfire,friends?lock=26",
    "1524368535928-5b5e00ddc76b": "https://loremflickr.com/1200/800/openmic,music?lock=27"
}

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    for id_str, new_url in replacements.items():
        pattern = r"https://images\.unsplash\.com/photo-" + id_str + r"[^\"\'\s]*"
        content = re.sub(pattern, new_url, content)
        
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk("src"):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts"):
            process_file(os.path.join(root, file))
