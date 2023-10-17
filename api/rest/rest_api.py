from aiohttp import web
import json
import aiohttp_cors

async def handler(request):
    response_obj = {'status': 'OK'}
    return web.Response(text=json.dumps(response_obj), status=200)

async def get_items(request):
    response_obj = [
    {
        "name": "Sprite",
        "type": "Drinks",
        "image": "./assets/sprite-can.png",
        "currency": "USD",
        "price": 2.49,
        "stock": 15,
    },
    {
        "name": "Oreo Ice Cream",
        "type": "Desserts",
        "image": "./assets/oreo-bars.png",
        "currency": "USD",
        "price": 5,
        "stock": 20,
    },
    {
        "name": "Sour Patch Kids",
        "type": "Snacks",
        "image": "./assets/sour-patch.png",
        "currency": "USD",
        "price": 3,
        "stock": 11,
    },
    ]
    return web.Response(text=json.dumps(response_obj), status=200)


# app.add_routes([web.get('/', handler),
#                 web.get('/items', get_items)])

app = web.Application()

cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
        allow_credentials=True,
        expose_headers="*",
        allow_headers="*",
    )
})
resource = cors.add(app.router.add_resource("/items"))
cors.add(resource.add_route("GET", get_items))



web.run_app(app)