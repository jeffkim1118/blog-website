require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# User.create(first_name: "Violet", last_name: "Evergarden", username: "vever23", email: "vever@gmail.com", password: "testing")
# User.create(first_name: "Rye", last_name: "Anderson", username: "randerson21", email: "ryea@gmail.com", password: "testing2")

Post.create(title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags:"Books", user_id:'1')