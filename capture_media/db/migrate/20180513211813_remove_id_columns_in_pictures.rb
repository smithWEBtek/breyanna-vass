class RemoveIdColumnsInPictures < ActiveRecord::Migration[5.1]
  def change
    remove_column :pictures, :user_id, :integer
    remove_column :pictures, :appointment_id, :integer
  end
end
