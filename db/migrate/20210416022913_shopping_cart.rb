class ShoppingCart < ActiveRecord::Migration[5.2]
  def change
    create_table :shoppingCart do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false

      t.timestamps
    end

    add_index :shoppingCart, :user_id
    add_index :shoppingCart, :listing_id
  end
end
