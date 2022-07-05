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

##Interface
When the program runs, it will show this page without showing any posts.
![image](https://user-images.githubusercontent.com/64029918/177392886-0a53a769-eddc-4f55-8904-7f06025e526f.png)
Users can always pre-fill the posts database using the Faker gem that is installed duing the installation process above.
Please use the following format when you do:

Type these into the Seeds.rb file:
```bash
newUser = User.create(first_name: "Type in First name", last_name: "Type in Last name", username: "Enter new username", email: "Enter new email", password: "Enter new password");
```
```bash
newUser.Post.create(title: "Enter title", content: "Enter content", tags: "enter tags using commas", user_id: "Enter id of user that you want to assign this post");
```
then type on this on console:
```bash
rails db:seed
```
You can now login with your newly created account!
![image](https://user-images.githubusercontent.com/64029918/177394672-7ad3da18-ce03-4092-b147-d0ab480c841b.png)

After logging in, you can see your own profile section that looks like this:
![image](https://user-images.githubusercontent.com/64029918/177394875-512fd5a8-da94-4c9c-ba29-1c1221cf97bc.png)
Your profile will not have any cards like the ones in the image unless you created post.
So, let's create a new post! First, you go to "Create New Post" screen by pressing the button on the navigation bar.
Then, fill out all the necessary informations into the fields. Make sure that you entered all the inputs otherwise, it will throw you an error message.
![image](https://user-images.githubusercontent.com/64029918/177395601-6bc6bb59-df78-4d3e-b239-190881dfa1a7.png)
After filling out informations, press submit at the bottom of the tags input section.
![image](https://user-images.githubusercontent.com/64029918/177396085-7f7835e5-005d-4a2a-9fa1-674d86f271f5.png)
Success! Now there's a new post for your account! Everyone can see your post at the homepage!
You can also update and delete the post using the options on the card.
![image](https://user-images.githubusercontent.com/64029918/177396378-132151f8-3cbf-4a3f-b180-5c720f3ad15e.png)

When you're done, you can sign out using the button "Log out" at the top-right corner of the screen.
![image](https://user-images.githubusercontent.com/64029918/177396506-dffe5483-1e49-4575-9465-5ff5f305219a.png)


## License
[MIT](https://choosealicense.com/licenses/mit/)
