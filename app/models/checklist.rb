class Checklist < ApplicationRecord
	has_many :user_checklists
	has_many :checklist_items

end
