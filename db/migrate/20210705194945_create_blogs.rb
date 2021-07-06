class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :src
      t.string :text
      t.string :label
      t.string :href

      t.timestamps
    end
  end
end
