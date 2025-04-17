function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }


    if (jsonPayload.battery) 
    {
        const batteries = [];
        for (var [key, value] of Object.entries(jsonPayload.battery))
        {
        env.log('Valor KEY: ', key "  ", "y VALUE:  " value);
            if (key=="voltage")
                {
                    env.log("Lo encontre Boludo: ",key);
                    let cortar = value.split(' ');
                    var data = cortar[0];
                    env.log(data);
                    
                }
            batteries.push({type: batteryType[key], voltage: data});
            env.log("batteryType: " key, "voltage:", data);          
        }
        device.updateDeviceBattery(batteries);
    }

}