#  ![bloggy](https://user-images.githubusercontent.com/64029918/177392475-d615b8a0-a6f1-483c-a861-510f85e95c74.png)( A Simple Blog Web application)

## Installation

### Frontend (Starting from backend is recommended)
Install npm first:
```bash
npm install --prefix client
```
Note: Make sure you're installing npm in the client folder and not outside of the client.

To start the frontend
```bash
npm start --prefix client
```

### Backend
To create database (Type on Linux based console like Ubuntu)
```bash
rails db:create
rails db:migrate
```

To pre-fill user database using Faker gem (Optional)
First, go to db/seeds.rb file then 
```bash
rails db:seed
```

To start the backend
```bash
bundle install
rails s
```

## Goals
1. Create an application that can perform CRUD action.
2. It needs to have Ruby on Rails backend and React.js frontend.
3. It needs to have user authentication features. Such as logging in, logging out, sessions, and sign out.
4. Involves one-to-many and many-to-many relationships in the backend.

## Idea
I decided to create a blogging website that can perform CRUD actions on blog posts and involves authentication.
Here's my diagram that I created to structure out my plan.
![Screenshot 2022-04-29 142352](https://user-images.githubusercontent.com/64029918/173248927-71b35f2b-30dc-49d2-8ac6-6125e494142f.png)
My app component is placed at the highest level and I will create a navbar that can track if the user is logged in or not. Users can create posts using their unique session id. Without their sessions, they are not authorized to create any posts.

## License
[MIT](https://choosealicense.com/licenses/mit/)
