const fs = require('fs');
const path = require('path');


export interface Model{
    name: string,
    model: object,
}

const models : Model[] = []
fs.readdirSync(__dirname).forEach(async (file) => {
        if ( file !== 'index.ts') {
            const model = await import(path.join(__dirname, file));
            models.push({
                    name: `${file.split('.')[0]}Model`,
                    model: model.default,
                }
            )
        }
});

export default models
