_G.Utils = _G.Utils or {}

function  _G.Utils.displayNUI(display)
    SendNUIMessage({
        type = "app/setDisplay",
        data = display
    })
    SetNuiFocus(display, display)
end

function  _G.Utils.resetLocalStorage()
    SendNUIMessage({
        type = "app/resetStorage",
        data = 'None'
    });
end