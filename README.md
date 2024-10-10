# Fortune1000 test task

## Use next environment:
- MySQL v8.0.39
- NodeJS v18.20.1

Before install:
1. Create database called `fortune` on your local MySQL database

## Fortune-backend
1. go to folder `fortune-backend`
2. `npm i`
3. `npm run execute upload FILE_PATH` where FILE_PATH - full path to file fortune1000_2024.csv
   for example `/home/ubuntu/Documents/fortune1000_2024.csv`.
   This script gets data from csv file into database
4. `npm run start`
Backend will run on PORT localhost:3000

## Nuxt-client
1. go to folder `nuxt-client`
2. `npm i`
3. `npm run dev`. Client will run on next 3000+ PORT (usually 3001). It writes PORT in console
4. open link `http://localhost:3001/` in Browser
5. Click `search page`
6. Type text for search
7. Click `search` button
8. To get detailed info click Lamp icon in the last `Detailed info` column