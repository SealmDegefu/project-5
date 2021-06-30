class UserChecklistItem < ApplicationRecord

	belongs_to :user_checklist

	validates :list, presence: true, length: { minimum: 5}
end
