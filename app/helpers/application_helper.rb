module ApplicationHelper
  #resturns the full title on a per-page basis
	def site_title(page_title)
		site_title = "Lakewood Zumba"
		if page_title.empty?
			site_title
		else
			"#{page_title} - #{site_title}"
		end
	end
end
