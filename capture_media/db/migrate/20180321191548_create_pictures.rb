class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.integer :user_id
      t.integer :appointment_id

      t.timestamps
    end
  end
end
