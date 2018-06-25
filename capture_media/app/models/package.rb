class Package < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments

    #has a description for the packages not captions on the table

    scope :popular, -> { where("view_count > ?", 10) }
end
