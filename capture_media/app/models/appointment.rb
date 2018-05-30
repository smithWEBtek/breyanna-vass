class Appointment < ApplicationRecord
    belongs_to :package
    belongs_to :user
    
    validates :name, presence: true, uniqueness: true
    validates :date, presence: true

    scope :recent, ->{ order("created_at DESC") }

    #PACKAGE_OPTIONS = ["Package 1","Package 2", "Package 3"]
end
