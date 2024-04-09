```
RegisterCommand("test",function()
    TriggerEvent("FS_inputs:sendinputs", "Enviar" ,"Teste de input", function(cb)
        print(cb)
    end) 
end)
```
