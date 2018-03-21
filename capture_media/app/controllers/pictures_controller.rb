class PicturesController < ApplicationController
  def new
  end

  def show
  end

  private

  def pictures_params
    params.permit(:user_id, :appointment_id)
  end
end
