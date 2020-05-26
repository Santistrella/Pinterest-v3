create table pins
(
    id          int          not null primary key,
    name        varchar(191) not null,
    description varchar(191),
    img_url     varchar(255),
    created_at  timestamp,
    updated_at  timestamp
);

create table IF NOT EXISTS pins
(
    id              int auto_increment
        primary key,
    name         varchar(191)                         not null,
    description  varchar(191)                         null,
    img_url      varchar(255)                         null,
    board_id     int                                  null,
    constraint   foreign key (board_id) references boards(id) on delete cascade,
    created_at   timestamp default CURRENT_TIMESTAMP  not null on update CURRENT_TIMESTAMP,
    updated_at   timestamp                            null
);

create table boards
(
    id          int auto_increment
        primary key,
    name         varchar(191)                         not null,
    description  varchar(191)                         null,
    category     varchar(191)                         null,
    owner        varchar(191)                         null,
    created_at   timestamp default CURRENT_TIMESTAMP  not null on update CURRENT_TIMESTAMP,
    updated_at   timestamp null
)
