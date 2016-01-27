##Install
 - run `npm install` to install node modules
 - run `bower install` to install bower & Polymer components

## Run for development
`npm start`

## Run for production
`npm run start:dist`

## Levels
layouts -> elements -> components

### layouts
`layouts` will not be vulcanized, it will import stuffs from `elements`.

`layouts` doesn't know where the data comes from, it only combines a few `elements` in various ways.

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

## Customization
Customization includes custom menu and custom layout.

### custom menu
`custom-menus` exists in `layouts/custom/` folder, it should contains the menu items that link to custom layouts.

### custom layout
Custom layouts exist in `layouts/custom/` folder, it could either uses the existing `sparklet` and `widget`, or uses other custom elements which by default will be available in the same custom folder (`layouts/custom/`).
