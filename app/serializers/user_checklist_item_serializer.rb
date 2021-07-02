class UserChecklistItemSerializer < ActiveModel::Serializer
  attributes :id, :list, :user_checklist_id

 belongs_to :user_checklist

end
