class PackagesController < ApplicationController
  def index
    @packages = Package.all
  end  
  
  def new
    @package = Package.new
    #@package = Package.create(packages_params)
  end

  def create
  end

  private

  def packages_params
    params.permit(:name, :description)
  end
end

