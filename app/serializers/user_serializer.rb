class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :wedding_date, :zipcode
  
  has_many :user_checklists
  has_many :user_checklist_items, through: :user_checklists
  has_many :notes
end
