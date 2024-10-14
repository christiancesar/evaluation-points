import * as fs from "node:fs";

export function utilSaveInJsonFile(data: any, filename: string) {
  const dataModified = JSON.stringify(data, null, 2);

  try {
    fs.writeFileSync(`./src/assets/${filename}.json`, dataModified, {
      encoding: "utf-8",
    });

    console.log("Status save: ", "Created");
  } catch (error) {
    console.error("Status save: ", error);
  }
}
