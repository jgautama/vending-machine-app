from aiohttp import web
import json

async def handler(request):
    response_obj = {'status': 'OK'}
    return web.Response(text=json.dumps(response_obj), status=200)

async def get_items(request):
    response_obj = [
    {
        "name": "Sprite",
        "image": "assets/sprite-can.png",
        "currency": "USD",
        "price": 2.49,
        "stock": 15,
    },
    {
        "name": "Oreo Ice Cream",
        "image": "assets/oreo-bars.png",
        "currency": "USD",
        "price": 5,
        "stock": 20,
    },
    ]
    return web.Response(text=json.dumps(response_obj), status=200)

app = web.Application()
app.add_routes([web.get('/', handler),
                web.get('/items', get_items)])
               
web.run_app(app)