class PostsController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:index, :show, :create]

    def show
        posts = User.find(params[:id]).posts
        render json: posts, include: :User
    end

    def index      
        posts = Post.all
        render json: posts, include: :User
    end

    def create      
        user = User.find_by(id: session[:user_id])
        post = user.posts.create(post_params)
        if post.valid?
            render json: post, status: :created
        else
            render json: {error: post.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
    def update      
        post = Post.find_by(id: params[:id])
        if post
            # Before update we have to compare two arrays and delete any tags that are not found in posts.tags
            # Iterate over posts.
            post.update(post_params)
            render json: post, status: :accepted
        else
            render json: {error: "Post not found"}, status: :not_found
        end
    end

    def destroy
        post = Post.find_by(id: params[:id])
        if post
            post.destroy
            
            render json: {}
        else
            render json: {error: "post not found"}, status: :not_found
        end
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def post_params
        params.permit(:title, :content, tags_attributes: %i[name])
    end 
end
