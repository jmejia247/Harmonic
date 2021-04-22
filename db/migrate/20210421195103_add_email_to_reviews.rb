class AddEmailToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :email, :string, null: false
    add_index :reviews, :email
  end
end
