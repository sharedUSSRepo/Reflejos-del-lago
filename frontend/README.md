# geo-puerto-montt

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Google Maps API key
This application uses Google Maps to have a map of the area. In order to work, you need to add the API key. First, create a `.env` file inside the root of frontend (/app/frontend). Then put the API key on this format:
```env
VUE_APP_GOOGLE_MAPS_API_KEY=your-api-key
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
