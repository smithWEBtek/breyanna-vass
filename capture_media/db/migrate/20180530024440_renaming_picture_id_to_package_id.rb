class RenamingPictureIdToPackageId < ActiveRecord::Migration[5.1]
  def change
    rename_column :appointments, :picture_id, :package_id
  end
end
