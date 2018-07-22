<img src='https://nypdecider.files.wordpress.com/2018/04/home-improvement-wilson-tim.jpg?quality=90&strip=all&strip=all'>

#(name to be confirmed)

A platform to share expensive equipment within trusted groups

## Name ideas
  * Commppliance
  * ESYWTUBNB
  * Toolies
  * Toolerino
  * ToolPool
  * GearShare
  * Gears of Poor
  * The Kitchen Sink
  * The Broom Cupboard
  * Blender
  * Return to Blender
  * Nuts & Bolts
  * The Broom Cupboard

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
  * Modal for add gear form


## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | Profile | View a logged in user's profile |
  | GearList | User's view of their own gear |
  | ItemInline | single item display in GearList |
  | NewGearForm | Form fpr user to add new item of gear |
  | ToolPool | View all gear in the loaning group |
  | Nav | Navigation Bar |

## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | gear | Store the array of all gear and status of any gear fetching/saving |
  | user | Store user info and array of all gear belonging to logged in user |


## Thunk Actions (Client Side)

Each of these actions calls on several synchrous actions on sending and receiving fetch/save requests to DB

  | name | data | purpose |
  | --- | --- | --- |
  | getGear | all gear | fetches all gear into client |
  | addGearItem | single item | saves new item to redux state and posts to server for DB saving |
  | registerUserRequest | new user form data | creates new user in the server and logs them in in state |
  | loginUser | login credentials | authenticates user and saves full info to state |
  | fetchUser | - | fetches full user data of logged in user |
  
## Synchrous actions

  | type | data | purpose |
  | --- | --- | --- |
  | GEAR_REQUEST | none | notifying state that gear request is in progress |
  | SET_GEAR | gear | gear array from response into state |
  | GEAR_ERROR | err | notifying state of error in fetch |
  | REQUEST_GEAR_SAVE | none | notifying state that gear push to server is in progress |
  | GEAR_ADD | item | pushes new item to local state and alters changes saving status to false |
  | SET_USER | user | saves user info to state on login or register |


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Request Data | Response |
| --- | --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | credentials object | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | registration form data | The Users JWT Token |
| Get | /api/gear/all | No | Get full list of gear | - | Array of Objects (object = A Gear Item) |
| Get | /api/gear/single/:id | No | Get a single gear item | - | A Gear Item |
| Post | /api/gear/new | Yes | Add a gear item to db | single gear object | gear item object |
| Post | /api/gear/update/:id | Yes | update gear object in DB | update info as an object | numUpdates (should be 1) |
| Delete | /api/gear/delete/:id | Yes | delete gear object | - | status 200 |

## DB (Server Side) -
 MVP has two tables -- Gear ( * - 1 ) Users

### Gear
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each item |
  | name | String | name of item |
  | description | String | Description of item, condition, missing parts etc. |
  | photo_url | string | URL of a picture of the item |
  | user_id | integer | Id of the owner |
  | trustframework | string | loaning category/conditions of item |
  | status | string | availability of item for use |

### Users (Join Table M21)

 | Column Name | Data Type | Purpose |
 | --- | --- | --- |
 | id | Integer | Unique identifier for each user |
 | user_name | string | Used for login |
 | first_name | string | First name |
 | last_name | string | Last name |
 | profile_pic | string | url of profile picture |
 | email_address | string | displayed for contact information |
 | hash | string | hashed login password |
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

Set environment variables on heroku (instead of .env)
```sh
heroku config:set GITHUB_USERNAME=joesmith
heroku config:set JWT_SECRET=somesecret
```

### Ta-Da!
Your app should be deployed!
