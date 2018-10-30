class PackagesController < ApplicationController
  def index
    @packages = Package.all
    #render 'packages/popular', :layout => false
  end  

  def show
  end
  
  def new
    @package = Package.new
    #@package = Package.create(packages_params)
  end

  def create
  end

  def popular
    @packages = Package.popular
    respond_to do |f|
      f.html { render 'packages/popular', :layout => false}
      f.json { render json: @packages}
    end
  end

  private

  def packages_params
    params.permit(:name, :description)
  end
end

