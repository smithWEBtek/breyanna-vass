class CreateAppointmentPictures < ActiveRecord::Migration[5.1]
  def change
    create_table :appointment_pictures do |t|
      t.integer :picture_id
      t.integer :appointment_id

      t.timestamps
    end
  end
end
