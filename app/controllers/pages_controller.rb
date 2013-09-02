class PagesController < ApplicationController
  def home
  end

  def about
  end

  def faqs
  end
  
  def calendar
  end
  
  def sitemap
    respond_to do |format|
      format.xml
      format.html
    end
  end
end
