class UserChecklistItemSerializer < ActiveModel::Serializer
  attributes :id, :list, :user_checklist_id, :isCompleted

 belongs_to :user_checklist

end
