## Names
  * Compliance
  * Commppliance
  * ESTPWTUBNB
  * Toolies
  * Blender
  * Return to Blender
  * Toolerino

## User Stories
  * I can sign up
  * I can see my profile
  * I can add some of my tools to share
  * I can view other tools in the Tool Pool
  * I can view a particualr tool and see the trust framework for it
  * I can request a tool to use (email sent)
  * Once accepted, the tools status changes to rented

### MVP
  * Login to view everything
  * Profile/Tools available to Share
  * Edit Tool Profile/Add a Tool Profile
  * Definining Trust Framework
  * Browse Tools available to use
  * Request a tool to use (email sent)
  * Change Tool Status to rented/available

### Stretch
  * Multiple Groups (Tool Pools)
  * Trust Ratings
  * See tools that are currently rented
  * Forum to discuss tools/appliances that people needs tips/advice with.
  * In app messages
  * View others' profiles when you're logged in
  * Keeping ToolPool ?anonymus? (proof of id auth)
  * Changing profile picture
  * Modle for add gear form

  ---
  
  
  
  
  
  
  
  
  
  
  
  fix below here

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | FoundPets | View the pets that users have found |
  | LostPets | View the pets that users have reported as lost |
  | LostForm | For a User to add a pet that they have lost |
  | FoundForm | For a user to add a pet that they have found |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | foundPets | Store the array of pets that have been found (from db) |
  | lostPets | Store the array of pets that have been lost (from db) |


## Actions (Client Side)

  | type | data | purpose |
  | --- | --- | --- |
  | RECEIVE_FOUND_PETS | pets | For retreving the found pets from the server response |
  | ADD_FOUND_PET | pet | For adding a found pet to the client store after is had been added to the db |
  | RECEIVE_LOST_PETS | pets | For retreving the lost pets from the server response |
  | ADD_LOST_PET | pet | For adding lost a pet to the client store after is had been added to the db |


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/lost | No | Get the list of lost pets | Array of Objects (object = A Lost Pet) |
| Get | /api/found | No | Get the list of found pets | Array of Objects (object = A Found Pet) |
| Post | /api/lost | Yes | Add a Lost pet to the db | The Pet that was added (as an object) |
| Post | /api/lost | Yes | Add a Found pet to the db | The Pet that was added (as an object) |

## DB (Server Side) -
  There should be three tables for MVP. You may want/need to add additional columns or tables.

### Lost
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each lost animal |
  | name | String | Name of Lost animal, because names are special <3 |
  | species | String | What kind of animal is it? |
  | photo | string | URL of a picture of the lost animal |
  | user_id | integer | Id of the user who reported the animal as lost |


### Found
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each found animal |
  | species | String | What kind of animal is it? |
  | photo | string | URL of a picture of the found animal |
  | user_id | integer | Id of the user who found the lost animal |

### Users (Join Table M2M)

  Many Users to Many Pets

 | Column Name | Data Type | Purpose |
 | --- | --- | --- |
 | id | Integer | Unique identifier for each user |
 | user_name | string | Used for login |
 | contact_details | string | displayed for contact information |
 | email_address | string | displayed for contact information |
 | hash | text | hashed login password |
 ---


## Setup

Run the following commands in your terminal:

```sh
yarn install
yarn knex migrate:latest
yarn knex seed:run
mv .env_example .env
```

To run in development:
```sh
yarn dev
 - or -
npm run dev

```

To run in production:
```sh
yarn start
  - or -
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
