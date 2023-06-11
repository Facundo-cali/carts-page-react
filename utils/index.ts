export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '8637805064msh29444fb9b11bf23p14737fjsn7df18b3f1fff',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });

    const result = await response.json();
    
    await result;

    return result;
}