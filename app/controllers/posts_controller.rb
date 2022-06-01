class PostsController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:index, :show, :create]

    def show
        posts = User.find(params[:id]).posts
        render json: posts, include: :user
    end

    def index      
        posts = Post.all
        render json: posts, include: :user
    end

    def create      
        user = User.find_by(id: session[:user_id])
        post = user.posts.create(post_params)
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

    def destroy
        post = Post.find_by(id: params[:id])
        if post
            post.destroy
            head :no_content
        else
            render json: {error: "post not found"}, status: :not_found
        end
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def post_params
        params.permit(:title, :content, :tags)
    end 
end
