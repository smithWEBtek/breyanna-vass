class Appointment < ApplicationRecord
    has_many :appointment_pictures
    has_many :pictures, through: :appointment_pictures
    belongs_to :user

    #has_many :users, through: :pictures
    
    validates :name, presence: true, uniqueness: true
    validates :date, presence: true

    scope :recent, ->{ order("created_at DESC") }
end
