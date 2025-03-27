QBCore = exports['qb-core']:GetCoreObject()


AddEventHandler("onResourceStop", function(resource)
    if resource == cfg.resourceName then
        Utils.displayNUI(false)
        SetNuiFocus(false, false)
    end
end)

RegisterNUICallback("close", function(data, cb)
    Utils.displayNUI(false)
    SetNuiFocus(false, false)
    cb(true)
end)

RegisterNUICallback("getPlayerData", function(data, cb)
    local Player = QBCore.Functions.GetPlayerData()
    cb(Player)
end)

RegisterNUICallback("getPlayerCount", function(data, cb)
    TriggerServerEvent(cfg.resourceName..":getPlayerCount")
    RegisterNetEvent(cfg.resourceName..":getPlayerCount")
    AddEventHandler(cfg.resourceName..":getPlayerCount", function(count)
        cb(count)
    end)
end)


