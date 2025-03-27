fx_version "cerulean"

game "gta5"

description "FiveM NUI NextJS Boilerplate - Made by OMikkel#3217"

author "OMikkel#3217"

shared_scripts {
	'@qb-core/shared/locale.lua',
	'config.lua'
}

client_scripts {
    "config.lua",
    "client/*.lua"
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    "config.lua",
    "server/*.lua"
}

ui_page "https://os-mdt.vercel.app/"