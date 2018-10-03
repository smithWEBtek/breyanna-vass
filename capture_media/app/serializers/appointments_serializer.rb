class AppointmentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :quantity, :package_id
end
