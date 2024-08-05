


exports('sendNotify', function(data) SendNUIMessage({action = 'Notify', desc = data}) end)

RegisterCommand('testNotify', function()
    exports['shinyx-notify']:sendNotify('Otworzyłeś panel Administracyjny')
end)