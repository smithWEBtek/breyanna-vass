class PicturesController < ApplicationController
  def new
    @picture = Picture.new
    #redirect_to pictures_new_path
  end

  private

  def pictures_params
    params.permit(:user_id, :appointment_id)
  end
end
