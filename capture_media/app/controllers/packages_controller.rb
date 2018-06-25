class PackagesController < ApplicationController
  def index
    @packages = Package.all
  end  

  def show
    @package = Package.new 
  end
  
  def new
    @package = Package.new
    #@package = Package.create(packages_params)
  end

  def create
  end

  def popular
    @package = Package.popular
  end

  private

  def packages_params
    params.permit(:name, :description)
  end
end

