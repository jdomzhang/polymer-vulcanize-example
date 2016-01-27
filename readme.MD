##Install
 - run `npm install` to install node modules
 - run `bower install` to install bower & Polymer components

## Levels
layouts -> elements -> components

### layouts
`layouts` will not be vulcanized, it will import stuffs from `elements`.
`layouts` doesn't know where the data comes from, it only combine `elements` together with various combination.

### elements
`elements` will be vulcanized one file per sub folder, e.g.

- finance: vulcanize to `elements/finance/index.html`
- product: vulcanize to `elements/product/index.html`
- warehouse: vulcanize to `elements/warehouse/index.html`

`elements` will import stuffs from `components` and `bower_components`.
`elements` itself knows where and how the data comes from, and is able to save user's input back to server side.

### components
`components` is the basic controls, it will be vulcanized to one single file

- `components/index.html`

`components` will import stuffs from `bower_components`, and use the basic HTML controls.

`components` only accepts data binding from outside, it knows how to bind the data, but it's not aware of where the data comes from.



## Run for development
`npm start`

## Run for production
`npm run start:dist`
