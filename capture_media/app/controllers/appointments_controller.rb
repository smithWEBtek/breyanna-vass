class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :edit, :update, :destroy]

  def index
    @user = User.find_by_id(params[:user_id])
    @appointments = @user.appointments
  end

  def show
    @picture = Picture.new
  end

  def new
    @appointment = Appointment.new
  end

  def edit
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      redirect_to @appointment
    else
      redirect_to new_appointment_path
    end
  end

  def update
    if @appointment.update(appointment_params)
      redirect_to @appointment
    else
      render :edit
    end
  end

  def destroy
    @appointment.destroy
    redirect_to appointments_url
  end

  

  private

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def appointment_params
    params.require(:appointment).permit(:name, :date, :quantity)
  end

end
