class ChecklistItemSerializer < ActiveModel::Serializer
  attributes :id, :list 

  belongs_to :checklist
end
