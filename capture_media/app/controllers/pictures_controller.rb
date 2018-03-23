class PicturesController < ApplicationController
  def new
    @picture = Picture.create(pictures_params)
    @message = @picture.take_picture
    redirect_to user_path(@picture.user, :message => @message)
  end

  private

  def pictures_params
    params.permit(:user_id, :appointment_id)
  end
end
