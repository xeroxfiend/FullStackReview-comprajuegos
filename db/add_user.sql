insert into users_comp (name, email, is_admin)
values (${name} ${email}, false)
returning user_id;

