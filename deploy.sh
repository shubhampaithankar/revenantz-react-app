#!/bin/bash

# Install dependencies
npm ci --only=production

# Build the React app
npm run build

# Copy the built files to the VPS
scp -r build/* root@139.180.190.142:/var/www/revenantz.net/public_html/
