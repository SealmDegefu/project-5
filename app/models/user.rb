class User < ApplicationRecord
	has_secure_password

	has_many :user_checklists
	has_many :user_checklist_items, through: :user_checklists
	has_many :notes

	validates :username, presence: true, uniqueness: true
end
