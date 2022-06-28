class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :tags, :user_id, :user
end
