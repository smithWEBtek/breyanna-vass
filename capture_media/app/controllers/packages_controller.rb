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
    render 'packages/popular', :layout => false
  end

  private

  def packages_params
    params.permit(:name, :description)
  end
end

