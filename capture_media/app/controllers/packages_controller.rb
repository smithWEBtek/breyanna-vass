class PackagesController < ApplicationController
  def new
    @package = Package.new
    #@package = Package.create(packages_params)
  end

  private

  def packages_params
    params.permit(:name, :description)
  end
end

