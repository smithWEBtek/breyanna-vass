class RenamingPicturesTableToPackagesTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :pictures, :packages
  end
end
