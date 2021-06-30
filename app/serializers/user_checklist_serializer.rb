class UserChecklistSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :user_checklist_items
end
