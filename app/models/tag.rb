class Tag < ApplicationRecord
    has_many :post_tags
    has_many :posts, through: :post_tags
    # before_create
    # before_create do
    #     if self.all.find_by 
    # end
    # if tag.name exist, don't create it
    # Else, create the new tag
end
