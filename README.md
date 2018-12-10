# Generic-Ajax-call

List of generic functions to manage ajax functionality.

## Installation

In order to use it, you should import the js file in your HTML page.

```bash
<script src=utils.js type="text/javascript"></script>
```

## Usage

``` js

Common.AjaxPost(url, JSON.stringify(data), 'json', successCallback);  # POST AJAX CALL
Common.AjaxGet(url, JSON.stringify(data), 'json', successCallback);  # GET AJAX CALL

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
