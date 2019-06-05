# Esports Senior Project

## How to run

1. Cd into the 'frontend' folder. Run `ng serve` for the front end server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

2. Cd into the 'backend' folder. Run `mongod` for the mongoose database server. To view registered users in the database,
run `mongo`, `show dbs` to view dbs, `use meanauth` to switch to the db, and `db.users.find().pretty()` to view all users' info.

3. Cd into the 'backend' folder. Run `npm start` for the back end server at `http://localhost:3000/`.

4. Cd 'backend/seed' and run `node player-seeder.js ` to generate the pre-built players for draft testing.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
