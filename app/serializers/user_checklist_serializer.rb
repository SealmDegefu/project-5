class UserChecklistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description

  has_many :user_checklist_items
end
