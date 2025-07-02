# Backend
this is the backend.

make sure you have an .env file that contains the following:
```bash
DB_URL="your_server_url"
GOOGLE_MAPS_API_KEY="your_google_maps_api_key"
SESSION_SECRET_KEY="your_secret_key"
```

if run localy, the db url could be something like:
```bash
DB_URL="mongodb://localhost:27017"
```

## Populate database
to populate the database, there are some initial scipt that would do that. Go to `./helpers` and there run
```bash
node populateLeaderboard.js
```
or the populate you want.
