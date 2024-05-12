const FaqSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20 mb-8 md:mb-16 lg:mb-24 bg-[#FFF5E0] bg-opacity-50 p-5 lg:p-12 rounded-lg shadow-sm">
            <div>
                <img src='https://static.vecteezy.com/system/resources/previews/002/779/438/original/website-faq-section-user-help-desk-customer-support-concept-illustration-flat-vector.jpg' alt="" className="w-full rounded-lg shadow-md" />
            </div>
            <div className="w-full space-y-3">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl  font-medium">
                        How do I borrow books from the library?
                    </div>
                    <div className="collapse-content">
                        <p className="opacity-80">
                            To borrow books, you will need to create an account on our website. Once logged in, you can search for books, select the ones you want, and add them to your borrowing list.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl  font-medium">
                        How many books can I borrow at once?
                    </div>
                    <div className="collapse-content">
                        <p className="opacity-80">
                            The number of books you can borrow at once depends on your membership type and the librarys borrowing policies. But a regular user can add three book at once.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl  font-medium">
                        How long can I keep borrowed books?
                    </div>
                    <div className="collapse-content">
                        <p className="opacity-80">
                            The loan period for borrowed books varies depending on the type of material and your membership status. But a regular user can take seven days.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl  font-medium">
                        What happens if I return a book late?
                    </div>
                    <div className="collapse-content">
                        <p className="opacity-80">
                            Late fees may apply for overdue books, depending on the librarys policies. Fees are typically charged per day for each overdue item. You can avoid late fees by returning books on time or renewing them before they are due.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl  font-medium">
                        How do I contact customer support for assistance?
                    </div>
                    <div className="collapse-content">
                        <p className="opacity-80">
                            If you have any questions or need assistance, you can contact our customer support team via phone, email, or through the contact form on our website. Our team is available during regular business hours to help with any inquiries or issues you may have.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;