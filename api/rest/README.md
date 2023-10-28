# Description
rest_api.py is a Python script intended to be the REST API that allows the client to send request (GET) and fetch the vending machine items in JSON format (see example below). In order to be able to render the image, you need to install and run the package by <a href="#install-virtual-environment-venv-for-the-first-time">setting up the venv</a>

```
    {
        "name": "Sprite",
        "type": "Drinks",
        "image": "./assets/sprite-can.png",
        "currency": "USD",
        "price": 2.49,
        "stock": 15,
    }
```


## Tech Stack:

Python (aiohttp)

## Install Virtual Environment (venv) for the first time
make sure you are in the correct directory [`../api/rest`]
```
python3 -m venv venv
source venv/bin/activate
pip install json
pip install aiohttp
pip install aiohttp_cors
```

## Run the API
```
source api/rest/venv/bin/activate
python api/rest/rest_api.py

Output:
======== Running on http://0.0.0.0:8080 ========
(Press CTRL+C to quit)

```