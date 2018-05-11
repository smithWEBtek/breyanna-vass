class AddDetailsToAppointments < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :user_id, :integer
  end
end
