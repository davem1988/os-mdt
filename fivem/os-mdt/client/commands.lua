QBCore = exports['qb-core']:GetCoreObject()

RegisterKeyMapping("+"..cfg.cmd, "Open "..cfg.resourceName.." NUI", "keyboard", cfg.hotkey)
RegisterCommand("+"..cfg.cmd, function()
    local Player = QBCore.Functions.GetPlayerData()
    if not (Player.job.name == 'police') then
        return QBCore.Functions.Notify("Vous n'êtes pas policier", 'error', 5000)
    end
    Utils.displayNUI(true)
    SetNuiFocus(true, true)
end, false)


RegisterCommand(cfg.cmd, function(source, args, raw)
    local Player = QBCore.Functions.GetPlayerData()
    if not (Player.job.name == 'police') then
        return QBCore.Functions.Notify("Vous n'êtes pas policier", 'error', 5000)
    end
    Utils.displayNUI(true)
    SetNuiFocus(true, true)
end, false)

RegisterCommand(cfg.cmd.."_close", function(source, args, raw)
    Utils.displayNUI(false)
    SetNuiFocus(false, false)
end, false)