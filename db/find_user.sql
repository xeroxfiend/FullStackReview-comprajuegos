select u.user_id, name, email, is_admin, hash from users_comp u
join users_login ul on u.user_id = ul.user_id
where email = $1;

