RegisterNetEvent(cfg.resourceName..":getAllPlayers")
AddEventHandler(cfg.resourceName..":getAllPlayers", function()
    local src = source
    local players = MySQL.query.await('SELECT * FROM players')
    TriggerClientEvent(cfg.resourceName..":getAllPlayers", src, players)
end)

RegisterNetEvent(cfg.resourceName..":getAllVehicles")
AddEventHandler(cfg.resourceName..":getAllVehicles", function()
    local src = source
    local vehicles = MySQL.query.await('SELECT * FROM player_vehicles')
    TriggerClientEvent(cfg.resourceName..":getAllVehicles", src, vehicles)
end)