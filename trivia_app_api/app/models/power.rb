class Power < ApplicationRecord
    has_many :powersets
    has_many :characters, through: :powersets
end
