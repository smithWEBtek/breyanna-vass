class Appointment < ApplicationRecord
    has_many :pictures
    #has_many :users, through: :pictures
    
    validates :name, presence: true, uniqueness: true
    validates :date, presence: true

    scope :recent, ->{ order("created_at DESC") }
end
