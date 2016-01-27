## Levels
layouts -> elements -> components

### layouts
`layouts` will not be vulcanized

### elements
`elements` will be vulcanized one file per sub folder, e.g.

- finance: vulcanize to `elements/finance/index.html`
- product: vulcanize to `elements/product/index.html`
- warehouse: vulcanize to `elements/warehouse/index.html`

### components
`components` is the basic controls, it will be vulcanized to single file

- `components/index.html`


## Run for development
`npm start`

## Run for production
`npm run start:dist`
