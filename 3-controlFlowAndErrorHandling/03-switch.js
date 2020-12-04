let num = -5;

switch (true) {
    case (num < 0 && num > -10): 
        console.log ('case 1 ran')
        break;
    case (num > 0):
        console.log ('case 2 ran');
        //break;
    case (num > 5):
        console.log('case 3 ran');
    default:
        console.log ('did not work')
        break;
}

// run any code here if 'break' happens 

let officeCharacter = 'Michael';

switch (officeCharacter) {
    case 'Pam':
        console.log('My mind is going a mile an hour');
        break;
    case 'Dwight':
        console.log('Perfectenschlag');
        break;
    case 'Jim':
        console.log("Bears. Beets. Battlestar Galactica")
        break;
    default:
        console.log(`I am sorry ${officeCharacter}, but do I know you?`);
}

