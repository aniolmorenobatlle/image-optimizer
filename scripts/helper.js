import { exec } from "child_process";

export function execPromise(command) {

    return new Promise((resolve, reject) => {

        exec(command, (error) => {

            if (error) {
                reject(error);
                return;
            }

            resolve();
        });

    });
}
