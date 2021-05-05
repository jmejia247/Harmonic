class Categories < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :category, :string
  end
end
