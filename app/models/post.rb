class Post < ApplicationRecord
    belongs_to :user
    # has_many :postComments
    # has_many :tags
end
