class Animal < ApplicationRecord
  has_many :users, through: :likes
end
