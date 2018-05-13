class AppointmentPicture < ApplicationRecord
    belongs_to :picture
    belongs_to :appointment
end
