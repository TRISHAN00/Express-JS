# Express-JS

HTTP:
-> GET - want to read data from server.
-> POST - create new data
-> PUT/PATCH - update existing content
-> DELETE - delete data from database

Routing Pattern
-> Get Everything - /books (all resource show together)
-> Get One Resource - /books/bookid
-> Post new Book - /books
-> Update Book - /books/bookid
-> Delete Book - /books/bookid

Pipeline
-> Request - MIDDLEWARE1[logger, body parser, file parser, user ip, block ip, authentication, authorization, validation], MIDDLEWARE1, CONTROLLER (Business Logic) -> RESPONSE
