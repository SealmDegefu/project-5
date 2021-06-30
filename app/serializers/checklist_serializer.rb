class ChecklistSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :user_checklists
	has_many :checklist_items
  
end
