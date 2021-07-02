class CreateUserChecklistItems < ActiveRecord::Migration[6.1]
  def change
    create_table :user_checklist_items do |t|
      t.text :list
      t.boolean :isCompleted
      t.integer :user_checklist_id
      # t.integer :checklist_items_id


      t.timestamps
    end
  end
end
