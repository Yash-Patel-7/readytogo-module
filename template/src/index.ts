import path from 'path';
import fs from 'fs-extra';

const example = async (): Promise<boolean> => {
	return fs.pathExists(path.join(__dirname, 'example'));
}

export {
	example
}
