class CreateUserChecklistItems < ActiveRecord::Migration[6.1]
  def change
    create_table :user_checklist_items do |t|
      t.string :list
      t.boolean :isCompleted
      t.integer :user_checklist_id


      t.timestamps
    end
  end
end
