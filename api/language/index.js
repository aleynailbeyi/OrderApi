import tr from './tr'
import en from './en'

module.exports = (language) => {
    try {
        let file;
        switch (language) {
            case 'tr':
                file = tr;
            break;
            case 'en':
                file = en;
                break;
            default:
                file = tr;
                break;
        } 
        return file;

    } catch (error) {
        return tr;
    }
}
