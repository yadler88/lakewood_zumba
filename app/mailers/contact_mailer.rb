class ContactMailer < ActionMailer::Base
    default :to => "blimie@lakewoodzumba.com"

    def new_contact(contact)
      @contact = contact
      mail(:from => contact.email, :subject => "[webmail]")
    end
end
