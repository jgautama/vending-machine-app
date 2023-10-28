
## Tech Stack:

### HTML
This is the tree structure of the content.

### CSS
Nothing fancy for styling. Color the column so user can differentiate each section (drink, snacks, desserts)

### JQuery
Import JQuery to render the items that client fetch from iohttp API server once DOM is rendered.
```
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
...
    <script type="text/javascript">
        $(document).ready(function() {
            console.log("Generating a dynamic image by calling an API using AIOHTTP");
            const data = displayItems();
        });
    </script>
```

Dockerfile
- nginx:alpine image