drop table if exists users_comp;
drop table if exists users_login;
drop table if exists games;

create table users_comp (
    user_id serial primary key,
    name varchar,
    email varchar,
    is_admin boolean
);

create table users_login (
    user_login_id serial primary key,
    user_id int references users_comp(user_id),
    hash text
);

create table games (
    game_id serial primary key,
    title varchar,
    price int,
    img text
);

insert into games(title, price, img)
values ('The Witcher 3: Wild Hunt', 5999, 'https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg'),
('God of War', 5999, 'https://images.igdb.com/igdb/image/upload/t_cover_big/cintjlnx6o8qyqtcnajl.jpg'),
('Persona 5', 4050, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1iea.jpg'),
('Chrono Trigger', 2500, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1myw.jpg'),
('The Last of Us', 3499, 'https://images.igdb.com/igdb/image/upload/t_cover_big/cceu88e8hf0gr5jpai4n.jpg'),
('Silent Hill 2', 1299, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p0a.jpg'),
('Red Dead Redemption 2', 5999, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p0a.jpg'),
('Metal Gear Solid 3: Snake Eater', 2499, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1ox4.jpg'),
('Metroid Prime', 999, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1o28.jpg'),
('The Legend of Zelda: Breath of the Wild', 4599, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1p98.jpg'),
('Horizon Zero Dawn', 2999, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1izx.jpg'),
('Super Mario World', 1499, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1qkt.jpg'),
('The Legend of Zelda: Ocarina of Time', 1495, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1n6b.jpg'),
('Mass Effect 2', 495, 'https://images.igdb.com/igdb/image/upload/t_cover_big/q8shkfzxblrn22o9dvra.jpg'),
('Uncharted 4: A Thiefs End', 2499, 'https://images.igdb.com/igdb/image/upload/t_cover_big/zvkdiv2dze8tcit6bzza.jpg'),
('Super Mario Odyssey', 4500, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.jpg'),
('Super Metroid', 1899, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1o11.jpg'),
('Shadow of the Colossus', 1455, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1ozz.jpg'),
('Indiana Jones and the Fate of Atlantis', 1645, 'https://images.igdb.com/igdb/image/upload/t_cover_big/wcofq8vczh5xnbizmxzi.jpg'),
('Half Life 2', 499, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1nmw.jpg'),
('Grand Theft Auto V', 2499, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1nt4.jpg'),
('Overwatch', 1999, 'https://images.igdb.com/igdb/image/upload/t_cover_big/fen88hu0vhcf3k3owkxd.jpg'),
('Super Smash Bros Ultimate', 4499, 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1il8.jpg');
​
select * from games




