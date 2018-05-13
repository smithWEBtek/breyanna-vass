class Picture < ApplicationRecord
    has_many :appointment_pictures
    has_many :appointments, through: :appointment_pictures
end
