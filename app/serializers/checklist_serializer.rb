class ChecklistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url

  has_many :user_checklists
	has_many :checklist_items 
end
