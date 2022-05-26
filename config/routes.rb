Rails.application.routes.draw do
    resources :users, :posts
  
    # Route to create session and authenticate user
    post "/login", to: "sessions#create"

    # Keep the current user untill logout
    get "/auth", to: "users#show"

    # Logout Route
    delete '/logout', to: 'sessions#destroy'

    post "/users", to: "users#create"

    get "/users", to: "users#index"

    # Show every posts in the database to view
    get "/posts", to: "posts#index"

    # Show posts that are belong to current logged in user
    get '/posts/:id', to: "posts#show"

    # Create post
    post "/posts", to: "posts#create"

    

end
