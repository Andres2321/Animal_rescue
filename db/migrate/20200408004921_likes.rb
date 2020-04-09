class Likes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :likes
      t.string :comments
      t.references :user, null: false, foreign_key: true
      t.references :animal, null: false, foreign_key: true

      t.timestamps
    end
  end
end

