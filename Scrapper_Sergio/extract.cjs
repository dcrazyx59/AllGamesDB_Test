const newman = require('newman');
const fs = require('fs');

newman.run({
    collection: require('./G2A_API.postman_collection.json'),
    environment: require('./G2A_Env.postman_environment.json'),
    iterationCount: 1
})
.on('done', function (err, summary) {
    if (err) { 
        console.error('Error al ejecutar la colección:', err);
        return;
    }

    let responses = [];

    summary.run.executions.forEach(exec => {
        if (exec.response && exec.response.stream) {
            try {
                const responseBody = JSON.parse(exec.response.stream.toString());

                if (responseBody.data && Array.isArray(responseBody.data.items)) {
                    responseBody.data.items.forEach(item => {
                        responses.push({
                            nombre_peticion: exec.item.name,
                            path: item.path,
                            name: item.name,
                            basePrice: item.price.amount
                        });
                    });
                }
            } catch (e) {
                console.error(`Error procesando respuesta de ${exec.item.name}:`, e);
            }
        }
    });

    fs.writeFileSync('responses.json', JSON.stringify(responses, null, 2), 'utf8');
    console.log('Archivo responses.json generado con los datos filtrados.');
});