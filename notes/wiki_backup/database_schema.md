# Users
| column name    | data type    | details               |
|----------------|--------------|-----------------------|
| id             | int          | not null, primary key |
| name           | varchar      | not null              |
| email          | varcharacter | not null, unique      |
| hashedPassword | varbinary    | not null              |

* unique index on email
* Sequelize hasMany shelves association
* Sequelize hasMany reviews association






# Shelves
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| type        | varchar   | not null              |
| userId      | int       | not null, foreignKey  |


* userId references User's table
* Sequelize belongsTo Users association
* Sequelize hasMany PodShelf association





# Pod Shelf
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| shelfId     | int       | not null, foreignKey  |
| podcastId   | int       | not null, foreignKey  |


* shelfId references Shelve's table
* podcastId references Podcast's table
* Sequelize belongsTo Shelves association
* Sequelize hasMany Podcasts association






# Podcasts
| column name  | data type | details               |
|--------------|-----------|-----------------------|
| id           | int       | not null, primary key |
| name         | varchar   | not null, unique      |
| description  | text      |                       |
| genreId      | int       | not null, foreignKey  |


* genreId references Genre's
* Sequelize belongsTo PodShelf association
* unique index on name
* Sequelize hasOne Genres association






# Genre
| column name  | data type | details               |
|--------------|-----------|-----------------------|
| id           | int       | not null, primary key |
| name         | varchar   | not null, unique      |


* unique index on name
* Sequelize hasOne Podcast's association






# Reviews

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| userId      | int       | not null, foreignKey  |
| PodShelfId  | int       | not null, foreignKey  |
| rating      | int       | not null              |
| reviewText  | text      |                       |


* userId references User's table
* podshelfId references Podcast's table
* Sequelize belongsTo Podcast's association
* Sequelize belongsTo Users's association
