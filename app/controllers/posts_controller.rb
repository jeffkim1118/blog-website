class PostsController < ApplicationController
    # before_action :authorize
    # skip_before_action :authorize, only: [:index]

    def show
        posts = Post.find_by(id:params[:id])
        render json: posts, include: :user
    end

    def index      
        posts = Post.all
        render json: posts
    end

    def create      
        post = Post.create(user_id: session[:user_id])
        render json: post, status: :created
      end
    
    def update      
        post = Post.find(params[:id])
        # code to update a document
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
