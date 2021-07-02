class CreateUserChecklists < ActiveRecord::Migration[6.1]
  def change
    create_table :user_checklists do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.integer :user_id
      t.integer :checklist_id

      t.timestamps
    end
  end
end
