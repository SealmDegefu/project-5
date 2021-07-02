class CreateChecklistItems < ActiveRecord::Migration[6.1]
  def change
    create_table :checklist_items do |t|
      t.text :list
      t.integer :checklist_id

      t.timestamps
    end
  end
end
