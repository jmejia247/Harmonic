class Listings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :brand, null: false
      t.string :model, null: false
      t.integer :price, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :listings, :title
  end
end
