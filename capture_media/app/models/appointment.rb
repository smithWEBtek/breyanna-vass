class Appointment < ApplicationRecord
    has_many :appointment_pictures
    has_many :pictures, through: :appointment_pictures
    belongs_to :user

    #has_many :users, through: :pictures
    
    validates :name, presence: true, uniqueness: true
    validates :date, presence: true

    scope :recent, ->{ order("created_at DESC") }

    def pictures_attributes=(pictures_attributes)
      pictures_attributes.values.each do |picture_attribute|
        picture = Picture.find_or_create_by(picture_attribute)
        pictures << picture if picture.persisted?
      end   
    end
end
