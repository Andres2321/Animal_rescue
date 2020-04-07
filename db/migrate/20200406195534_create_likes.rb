class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :likes
      t.string :comments
      
      t.timestamps
    end
  end
end
