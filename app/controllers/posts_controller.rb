class PostsController < ApplicationController
    # before_action :authorize
    # skip_before_action :authorize, only: [:index]

    def show
        posts = User.find(params[:id]).posts
        render json: posts, include: :user
    end

    def index      
        posts = Post.all
        render json: posts, include: :user
    end

    def create      
#         respond_with Post.create(post_params.merge(user_id: current_user.id))
        post = Post.create(post_params)
        if post.valid?
            render json: post, status: :created
        else
            render json: {error: post.errors.full_messages }, status: :unprocessable_entity
        end

        # render json: post, status: :created
      end
    
    def update      
        post = Post.find(params[:id])
        # code to update a document
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def post_params
        params.permit(:title, :content, :tags)
    end 
end
