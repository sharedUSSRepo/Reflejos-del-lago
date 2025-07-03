# Backend
This is the backend of the app. It works ussing express.

## Requirements
- pnpm
- a Google Maps Api Key

## Setup
first install the packages using pnpm
```bash
pnpm install
```

Then, make sure you have an .env file that contains the following:
```bash
DB_URL="your_server_url"
GOOGLE_MAPS_API_KEY="your_google_maps_api_key"
SESSION_SECRET_KEY="your_secret_key"
```

if run localy, the db url could be something like:
```bash
DB_URL="mongodb://localhost:27017"
```

## Run the backend
To run the backend, just do:
```bash
pnpm run serve
```

## Populate database
to populate the database, there are some initial scipt that would do that. Go to `./helpers` and there run
```bash
node populateCoordinates.js
```
or the populate you want.