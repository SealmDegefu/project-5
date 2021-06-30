class UserChecklist < ApplicationRecord
	has_many :user_checklist_items

	validates :name, presence: true
end
