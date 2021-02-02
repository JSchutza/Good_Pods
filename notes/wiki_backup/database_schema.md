# Users
| column name    | data type    | details               |
|----------------|--------------|-----------------------|
| id             | int          | not null, primary key |
| name           | varchar      | not null              |
| email          | varcharacter | not null, unique      |
| hashedPassword | varbinary    | not null              |


* unique index on email
* Sequelize `hasMany` shelves association
* Sequelize `hasMany` reviews association


# Shelves
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| type        | varchar   | not null              |
| userId      | int       | not null, foreignKey  |


* userId references Users table
* Sequelize `belongsTo` Users association
* Sequelize `belongsToMany` PodShelf association



# Pod Shelf
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| shelfId     | int       | not null, foreignKey  |
| podcastId   | int       | not null, foreignKey  |


* shelfId references Shelves table
* podcastId references Podcasts table
* Sequelize `hasMany` Shelves association
* Sequelize `hasMany` Podcasts association



# Podcasts
| column name  | data type | details               |
|--------------|-----------|-----------------------|
| id           | int       | not null, primary key |
| name         | varchar   | not null, unique      |
| description  | text      |                       |
| genreId      | int       | not null, foreignKey  |


* genreId references Genres
* Sequelize `belongsTo` PodShelf association
* unique index on name
* Sequelize `hasOne` Genres association



# Genre
| column name  | data type | details               |
|--------------|-----------|-----------------------|
| id           | int       | not null, primary key |
| name         | varchar   | not null, unique      |


* unique index on name
* Sequelize `hasMany` Podcasts association



# Reviews
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| userId      | int       | not null, foreignKey  |
| podCastId   | int       | not null, foreignKey  |
| rating      | int       | not null              |
| reviewText  | text      |                       |


* userId references Users table
* podCastId references Podcasts table
* Sequelize `belongsTo` Podcasts association
* Sequelize `belongsTo` Users association
