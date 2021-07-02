class UserChecklist < ApplicationRecord
	has_many :user_checklist_items
	belongs_to :user
	belongs_to :checklist

	validates :name, presence: true
end
