class Picture < ApplicationRecord
    belongs_to :appointments
	belongs_to :users
end
