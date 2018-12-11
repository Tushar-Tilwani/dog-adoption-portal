# Dog Adoption portal

## Salient feature

- Generates a static website
- Separate vendor and page specific JavaScript. Gives browser the ability to cache vendor JavaScript
- Lazy loaded images
- Infinte scroll
- Semantic tags and anchor tags routing for better SEO

## Installation

- Install Node and NPM
- Pull this package locally
- `cd /link/to/package/dog-adoption-portal`
- `npm install`
- `npm run build`
- Static website is generated in the folder in `dist` folder
- Click on `index.html` to view the website

### File structure

```
dist
│   index.html
│
└───views
│   │   describe.html
│   │
└───js
│   │   describe.js
│   │   list.js
│   |   vendor.js
└───assets
    │   images
```

## Future Scope

- Make js and css inline
- Infite Scroll: Remove images if not in viewport (Always have only a certain number of items in DOM)
- Serve dogs.json over a rest API
- Implement filter
- Keep images on CDN
