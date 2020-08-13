class Character < ApplicationRecord
    has_many :powersets
    has_many :powers, through: :powersets
end
