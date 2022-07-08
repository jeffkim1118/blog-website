class Post < ApplicationRecord
    belongs_to :user
    has_many :post_tags, dependent: :destroy
    has_many :tags, through: :post_tags

    # Nested attributes allow you to save attributes on associated records through the parent
    accepts_nested_attributes_for :tags, allow_destroy: true
end
