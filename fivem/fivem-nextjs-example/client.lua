QBCore = exports['qb-core']:GetCoreObject()

local function displayNUI(display)
    SendNUIMessage({
        type = "app/setDisplay",
        data = display
    })
    SetNuiFocus(display, display)
end


RegisterKeyMapping("+"..cfg.cmd, "Open "..cfg.resourceName.." NUI", "keyboard", cfg.hotkey)
RegisterCommand("+"..cfg.cmd, function()
    local Player = QBCore.Functions.GetPlayerData()
    displayNUI(true)
    SetNuiFocus(true, true)
end, false)


RegisterCommand(cfg.cmd, function(source, args, raw)
    local Player = QBCore.Functions.GetPlayerData()
    displayNUI(true)
    SetNuiFocus(true, true)
end, false)

RegisterCommand(cfg.cmd.."_close", function(source, args, raw)
    displayNUI(false)
    SetNuiFocus(false, false)
end, false)


AddEventHandler("onResourceStop", function(resource)
    if resource == cfg.resourceName then
        displayNUI(false)
        SetNuiFocus(false, false)
    end
end)

RegisterNUICallback("close", function(data, cb)
    displayNUI(false)
    SetNuiFocus(false, false)
    cb(true)
end)

RegisterNUICallback("getPlayerCount", function(data, cb)
    TriggerServerEvent(cfg.resourceName..":getPlayerCount")
    RegisterNetEvent(cfg.resourceName..":getPlayerCount")
    AddEventHandler(cfg.resourceName..":getPlayerCount", function(count)
        cb(count)
    end)
end)


