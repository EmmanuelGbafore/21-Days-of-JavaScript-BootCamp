function greetings(nationalities){
    switch(nationalities){
    case "British":
        return 'Hello';
    case "French":
        return 'Bonjour';
    case "Italian":
            return 'Ciao';
    case "Kenyan":
            return 'Habari'; 
    case "Chinese":
           return 'Ni hao';    
    default:
        return 'greetings';
    }
    }
    
    // Enter any of the five nationalities British, French, Italian, Chinese or Kenyan in the single quotes
    console.log(greetings('Kenyan'));