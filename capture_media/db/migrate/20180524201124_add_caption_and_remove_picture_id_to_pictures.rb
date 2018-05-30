class AddCaptionAndRemovePictureIdToPictures < ActiveRecord::Migration[5.1]
  def change
    add_column :pictures, :caption, :string
    remove_column :pictures, :pictures_id, :integer
  end
end
