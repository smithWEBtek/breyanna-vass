class AddPictureIdColumnToPictures < ActiveRecord::Migration[5.1]
  def change
    add_column :pictures, :pictures_id, :integer
  end
end
