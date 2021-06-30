class NoteSerializer < ActiveModel::Serializer
  attributes :id, :notes, :date

  has_one :user 
end
