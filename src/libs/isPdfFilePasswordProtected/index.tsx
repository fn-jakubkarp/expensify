import * as pdfjsLib from 'pdfjs-dist';
import type {FileObject} from '@components/AttachmentModal';

const isPdfFilePasswordProtected = (file: FileObject): Promise<boolean> => {
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const arrayBuffer = event.target?.result;
            if (!arrayBuffer) {
                resolve(false);
            } else {
                try {
                    const loadingTask = pdfjsLib.getDocument({data: arrayBuffer});
                    loadingTask.promise.then(
                        () => {
                            resolve(false);
                        },
                        (error) => {
                            if (error.name === 'PasswordException') {
                                resolve(true);
                            } else {
                                resolve(false);
                            }
                        },
                    );
                } catch (error) {
                    resolve(false);
                }
            }
        };

        reader.onerror = (error) => {
            resolve(false);
        };

        reader.readAsArrayBuffer(file);
    });
};

export default isPdfFilePasswordProtected;
