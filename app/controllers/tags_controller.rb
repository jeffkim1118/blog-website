class TagsController < ApplicationController
    def show
        tag = Tag.find_by(id: params[:id])
        posts = tag.posts
        render json: posts, include: :tags
    end
end
