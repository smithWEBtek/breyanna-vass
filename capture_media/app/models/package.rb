class Package < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments

    #has a description for the packages not captions on the table

    scope :popular, -> { Package.left_joins(:appointments).group(:id).order('COUNT(appointments.id) DESC').limit(1) }

    #return just the model not an array
        
end
