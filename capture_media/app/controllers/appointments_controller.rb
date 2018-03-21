class AppointmentsController < ApplicationController
  set_appointment
   
  def index
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def destroy
  end

  private

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def appointment_params
    params.require(:appointment).permit(:name, :datetime, :quantity)
end
