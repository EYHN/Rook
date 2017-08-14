import * as echo from '../src';
import * as fs from 'fs';
import * as path from 'path';

fs.readFile(path.join(__dirname, './test.md'), 'utf8', (readerr, data) => {
    // tslint:disable-next-line:no-console
    if (readerr) console.log(readerr);
    const HTML = echo.render(data);

    fs.open(path.join(__dirname, './out.html'), 'w', (openerr, fd) => {
        // tslint:disable-next-line:no-console
        if (openerr) console.log(openerr);
        fs.write(fd, HTML, (writeerr) => {
            // tslint:disable-next-line:no-console
            if (writeerr) console.log(writeerr);
            // tslint:disable-next-line:no-console
            console.log('success');
        });
    });
});
