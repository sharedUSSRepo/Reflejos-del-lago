#!/bin/sh

# Wait for MongoDB to be ready
echo "⏳ Waiting for MongoDB..."
until nc -z mongo 27017; do
  sleep 1
done
echo "✅ MongoDB is up!"

# Populate the database
echo "🌱 Populating cities..."
node helpers/populateCities.js

echo "🌍 Populating coordinates..."
node helpers/populateCoordinates.js

# Start backend
echo "🚀 Starting backend..."
pnpm run serve
