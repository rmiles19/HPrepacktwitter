class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :text
      t.string :mood

      t.timestamps
    end
  end
end
