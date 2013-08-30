class ContactMailer < ActionMailer::Base
    default :to => "yadler88@gmail.com"

    def new_contact(contact)
      @contact = contact
      mail(:from => contact.email, :subject => "[webmail]")
    end
end
