class Picture < ApplicationRecord::Base
    belongs_to :appointments
	belongs_to :users
end
