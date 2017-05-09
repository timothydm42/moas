
                    Cloud Inventory Management with Alexa                       

   =>   What's it do?
        -------------

        Maintain a record of inventory manually through our simple web
        app and verbally through the Amazon Alexa.

   =>   Known bugs
        ----------

        The Amazon Alexa device does not reliably negotiate the difference
        between "to" and "two", nor "for" and "four." Prefixing with
        "number" (as in "Alexa, add number two lemons to inventory") will
        usually solve this problem.  

   =>   Using the App
        -------------

        This web app is designed to be easy to use and to be used in
        conjunction with the Amazon Alexa line of products.

        Initially you are brought to the inventory page, this is most
        likely where you will spend most, if not all, of your time. Front
        and center is your table of items and the current stock. The stock
        is modifiable from the input fields directly adjacent to them,
        simply type in the amount of stock that it should be and hit the
        ‘set #’ button. The quantity will update instantly and this change
        will be reflected in the database.

        To the upper left you will see a small section that you can use to
        add a new product, just type in the name of the product and the
        starting quantity and it will be added to the product table.
        Conversely, you can delete products from the table by using the
        section on the bottom left, just type in the name and hit the button
        and the item will be removed.

        Also, on the right side you will see a search function. To save
        time scrolling through the entire table, you can simply type in the
        name of the product you want to view and it will be brought up in
        the center table. All products that don’t match the search will
        disappear, but don’t worry, they are safe and sound in the database
        and will return once your search is deleted.

        The top section is the navigation bar, which you can use to switch
        between the inventory page, the home page, the about page, and our
        contact info. The home page just has a short welcome message, the
        about page will give you a shortened version of the purpose of the
        website and the contact page has the contact info for the three
        developers of the site. If you have any issues, feel free to use
        this to contact any of the developers.

        The Alexa side of the website is simple to use as well. The first
        thing to remember is that you must use the command ‘ask lemon grab’
        before any command you give to Alexa. Then you can ask her to either
        add more stock to a product, subtract stock from a product, find
        out how much stock you have of a product, add a new product, or
        delete a product, which requires a password (the default password
        is “batman”). The following are a few examples of commands you can
        give to Alexa to complete these tasks:

        Add: “Hey Alexa, ask lemon grab to add five lemons”

        Subtract: “Hey Alexa, ask lemon grab to take away five lemons”

        Get stock: “Hey Alexa, ask lemon grab to tell me how many lemons
                    we have”

        new product: “Hey Alexa, ask lemon grab to make a new product limes
                      with a quantity of seven”

        delete product: “Hey Alexa, ask lemon grab to delete the product
                         limes, password batman”

        After a successful request, Alexa will respond with what she did to
        the database. Make sure to be very clear when speaking to your Alexa
        unit. All changes that are made to the database are always reflected
        on the website as well. Feel free to try out different ways to ask
        Alexa to complete certain tasks, we have tried to add as many
        possible ways to ask her to do things as possible. However, we want
        to make sure that your  experience is as smooth and easy as
        possible, so if you find that Alexa does not respond to the
        phrases you like using, then go to the contact page and reach out
        to the developers, we will be more than happy to add whatever you
        want to her understanding to make Alexa more easy for you to use.

   =>   Latest Version
        --------------

        The latest version is available as a pair of github repositories:
        Alexa Skill Lambda Function:
                        https://github.com/teamalexatnm/moar
        Web App repository:
                        https://github.com/teamalexatnm/moas

   =>   Dependencies
        ------------

        Full details on dependencies can be found in each respective
        repository's package.json file.


   =>   Installation
        ------------

        Fork and clone down each repository. Npm or yarn can add the
        dependencies.

   =>   Authors
        -------

        Nathaniel-j-s,  kyleryker,  timothydm42


   =>   Questions, comments, concerns, requests?
        ----------------------------------------

        Go ahead and use the "issues" tab on the repository that you
        would like to base your message around and we will get back
        to you asap. Thanks.
