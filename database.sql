create TABLE reachOut(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	message VARCHAR(255),
	 CHECK(
        email ~ '^[\w]+\@\w{0,6}\.\w{2,4}$'
    )
)