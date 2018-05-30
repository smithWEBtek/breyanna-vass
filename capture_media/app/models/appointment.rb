class Appointment < ApplicationRecord
    belongs_to :package
    belongs_to :user
    
    validates :name, presence: true, uniqueness: true
    validates :date, presence: true

    scope :recent, ->{ order("created_at DESC") }
end
