class AddPictureIdToAppointments < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :picture_id, :integer
  end
end
