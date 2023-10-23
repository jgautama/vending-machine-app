from aiohttp import web
import json
import aiohttp_cors

async def handler(request):
    response_obj = {'status': 'OK'}
    return web.Response(text=json.dumps(response_obj), status=200)

async def get_items(request):
    response_obj = [
    {
        "name": "Coca Cola",
        "type": "drinks",
        "image": "./assets/img/coca-cola-can.png",
        "currency": "USD",
        "price": 2.49,
        "stock": 15,
    },
    {
        "name": "Haagen Dazs Coffee Ice Cream",
        "type": "desserts",
        "image": "./assets/img/haagen-dazs-coffee-ice-cream.png",
        "currency": "USD",
        "price": 6,
        "stock": 20,
    },
    {
        "name": "Haribo",
        "type": "snacks",
        "image": "./assets/img/haribo-candy.png",
        "currency": "USD",
        "price": 2.50,
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