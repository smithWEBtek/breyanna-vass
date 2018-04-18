class PicturesController < ApplicationController
  def new
    @picture = Picture.create(pictures_params)
    redirect_to pictures_new_path
  end

  private

  def pictures_params
    params.permit(:user_id, :appointment_id)
  end
end
