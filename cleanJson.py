import json
  
with open("./trees.json", "r") as jsonFile:
    data = json.load(jsonFile)

tmp = data["location"]
data["location"] = "NewPath"

with open("./trees.json", "w") as jsonFile:
    json.dump(data, jsonFile)