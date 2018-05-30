class RenamingCaptionToDescriptionAndAddingAName < ActiveRecord::Migration[5.1]
  def change
    rename_column :packages, :caption, :description
    add_column :packages, :name, :string
  end
end
