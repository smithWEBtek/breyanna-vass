class PackagesController < ApplicationController
  def new
    @package = Package.new
  end

  private

  def packages_params
    params.permit(:name, :description)
  end
end

