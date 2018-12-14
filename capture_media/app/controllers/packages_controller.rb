class PackagesController < ApplicationController
  def index
    @packages = Package.all
    #render 'packages/popular', :layout => false
  end  

  def show
    @package = Package.find(params[:id])
    render json: @package
  end
  
  def new
    @package = Package.new
    #@package = Package.create(packages_params)
  end

  def create
  end

  def popular
    @package = Package.popular[0]
    respond_to do |f|
      f.html { render 'packages/popular', :layout => false}
      f.json { render json: @package}
    end
  end

  private

  def packages_params
    params.permit(:name, :description)
  end
end

