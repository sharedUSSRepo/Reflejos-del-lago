# Backend
this is the backend.

make sure you have an .env file that contains the following:
```bash
DB_URL="your_server_url"
```

if run localy, it would be something like:
```bash
DB_URL="mongodb://localhost:27017"
```

## Populate database
to populate the database, there are some initial scipt that would do that. Go to `./helpers` and there run
```bash
node populateLeaderboards.js
```
or the populate you want.