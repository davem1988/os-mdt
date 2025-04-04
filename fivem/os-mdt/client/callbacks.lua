QBCore = exports['qb-core']:GetCoreObject()

RegisterNUICallback("close", function(data, cb)
    Utils.displayNUI(false)
    SetNuiFocus(false, false)
    cb(true)
end)

RegisterNUICallback("getPlayerData", function(data, cb)
    local Player = QBCore.Functions.GetPlayerData()
    cb(Player)
end)

RegisterNUICallback("getAllPlayers", function(data, cb)
    TriggerServerEvent(cfg.resourceName..":getAllPlayers")
    RegisterNetEvent(cfg.resourceName..":getAllPlayers")
    AddEventHandler(cfg.resourceName..":getAllPlayers", function(players)
        print(QBCore.Debug(players, 1))
        cb(players)
    end)
end)



RegisterNUICallback("getAllVehicles", function(data, cb)
    TriggerServerEvent(cfg.resourceName..":getAllVehicles")
    RegisterNetEvent(cfg.resourceName..":getAllVehicles")
    AddEventHandler(cfg.resourceName..":getAllVehicles", function(vehicles)
        cb(vehicles)
    end)
end)

RegisterNUICallback("createNewInfraction", function(data, cb)
    print(QBCore.Debug(data))
    cb("ok")
end)