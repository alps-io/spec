{
    "collection" : {
        "version" : "1.0",
        "href" : "http://example.org/contacts/",

        "links" : [
            {
                "rel" : "profile", 
                "href" : "http://alps.io/profiles/contacts"
            },
            {
                "rel" : "type", 
                "href" : "http://alps.io/profiles/contacts#contact"
            }
        ],

        "queries" : [
            {
                "rel" : "collection", 
                "rt" : "contact", 
                "href" : "http://example.org/contacts/",
                "data" : [
                    {
                        "name" : "nameSearch", 
                        "value" : "", 
                        "prompt" :  "Search Name"
                    }
                ]
            }
        ],

        "items" : [
            {
                "href" : "http://example.org/contacts/1",
                "rel" : "item",
                "rt" : "contact",
                "data" : [
                    {"name" : "fullName", "value" : "Ann Arbuckle" },
                    {"name" : "email", "value" : "aa@example.org" },
                    {"name" : "email", "value" : "123.456.7890" }
                ],
                "links" : [
                    {
                        "rel" : "type", 
                        "href" : "http://alps.io/profiles/contacts#contact"
                    }
                ]
            },
            {
                "href" : "http://example.org/contacts/100",
                "rel" : "item",
                "rt" : "contact",
                "data" : [
                    {"name" : "fullName", "value" : "Zelda Zackney" },
                    {"name" : "email", "value" : "zz@example.org" },
                    {"name" : "email", "value" : "987.654.3210" }
                ],
                 "links" : [
                    {
                        "rel" : "type", 
                        "href" : "http://alps.io/profiles/contacts#contact"
                    }
                ]
            }
        ]
    }
}
