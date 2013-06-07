# jQuery Custom Radio

A simple, lightweight jQuery plugin to create custom radio button (compatible with Twitter Bootstrap)

## Dependencies

[jQuery](http://jquery.com/) (>= 1.9.0)

## Usage

### HTML

First of all, include Google API and jQuery

```html
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script>window.jQuery || document.write('<script src="path/to/jquery/jquery-1.9.1.min.js"><\/script>')</script>
```

Then, create element that will contain the piechart

```html
<div id="myradiogroup">
    <label>
        <input type="radio" name="foo" value="1" checked>
        Lorem ipsum #1
    </label>
    <label>
        <input type="radio" name="foo" value="2">
        Lorem ipsum #2
    </label>
</div>
```

### JS

Use the plugin as follows:

```js
$('#myradiogroup').radio();
```

### Rendering...

```html
<div id="myradiogroup">
    <label>
        <input type="radio" name="foo" value="1" style="display: none;" checked>
        <i class="icon-check"></i>
        Lorem ipsum #1
    </label>
    <label>
        <input type="radio" name="foo" value="2" style="display: none;">
        <i class="icon-check-empty"></i>
        Lorem ipsum #2
    </label>
</div>
```

## Options

None.

## Demo

Coming soon!

## Authors

[@ellipsesynergie](http://github.com/ellipsesynergie)

## License

MIT