class Note < ApplicationRecord
	belongs_to :user 

	validates :notes, length: { maximum: 200}
end
