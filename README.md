# jquery.thrive
Yet another full-fledged jQuery progress indicator button plugin with bare minimum code (**1831** Bytes only, js: 643 Bytes, css: 1188 Bytes).

## Dependency
Since it is a jQuery plugin; jQuery library should be included on prior.

## Installation

Include `jquery.thrive.min.css` from dist folder.
```
<link rel="stylesheet" href="./dist/jquery.thrive.min.css">
```

Include `jquery.thrive.min.js` from dist folder.
```
<script src="./dist/jquery.thrive.min.js"></script>
```
Initiate the plugin.
```
var thrive = $('.target').thrive();
```
Thats all. Your target button is now thrive.

npm? `npm i jquery.thrive`

## Usage
To see the progress in thrive button all you need to do is push the progress into it.

```
thrive.progress(value);
```
*Note:*
- The value is the progress of some process. Note that the value is in scale of `0` to `1` which will be converted to `%` value within the plugin. So, don't pass percent value directly. For example, a progress of `73%` reprecents the value to be `0.73`.
  
- It is _required_ to define your button for thrive in `<button>...</button>` tag. thrive doesn't work with `<input>` buttons.

## Examples

A complete demo page is located here:

_[todo]_

You can also experience the look of thrive here. (plugin not used, only core code is used for demo):
https://codepen.io/effone/pen/VVwpaK

## Options
- **style** (string): thrive supports progress bar styling out of the box. There are three styles in-built : 'default', 'slick' and 'stripe'. This can be extended through CSS, ofcourse. You have to define the style name in settings, in any other case default style will be loaded.
  
  `var thrive = $('.target').thrive({ style: 'stripe' });`

- **spin** (bool): set `true` or `false` to show or hide a spinner inside the button indicating working on background. Default value is `true`.
  
  `var thrive = $('.target').thrive({ spin: false });`

- **sig** (string): You can define an alternative button text to show while progressing.
  
  `var thrive = $('.target').thrive({ sig: 'Uploading...' });`

## Callback
You can define your own callback functions for thrive. There are two callbacks that can be executed: **`pre`** and **`post`**. `pre` gets executed before starting progress and `post` gets executed after completing progress.

You can define callbacks this way:
```
var thrive =    $('.target').thrive({
                    pre: function(){
                        console.log('Progress started');
                    }
                });
```
## Customization

The look of the thrive button can be customized completely through CSS. If you have defined your default button style already that will be inherited (only background color will not). 

## Version History
1.0.0 : <2018.11.06>
- Initial stable release
