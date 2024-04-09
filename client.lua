local input

AddEventHandler("FS_inputs:sendinputs", function(placeholder,placeholder2,cb)
getinput(placeholder,placeholder2,cb)
end)


 function getinput(placeholder,placeholder2,cb)
    local Cb = cb
Citizen.CreateThread(function()
    SetNuiFocus(true,true)
    SendNUIMessage({
        action = "open",
        title = placeholder2,
        button = placeholder
    })
    while not input do
        Citizen.Wait(50)
    end
    cb(input)
    Citizen.Wait(10)
    input = nil
    SetNuiFocus(false,false) 
end)
end 


RegisterNUICallback('sendinput', function(data)
    input = data.input
    SetNuiFocus(false,false) 
end)

RegisterNUICallback('closeui', function()
    SetNuiFocus(false,false) 
end)

RegisterCommand("test",function()
    TriggerEvent("FS_inputs:sendinputs", "Enviar" ,"Teste de input", function(cb)
        print(cb)
    end) 
end)

RegisterCommand("debug",function()
    SetNuiFocus(false,false) 
end)

