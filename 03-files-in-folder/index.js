const fs = require("fs");
const path = require("path");
const secretFolder = path.join(__dirname, "secret-folder");

fs.readdir(secretFolder, { withFileTypes: true }, (err, files) => {
  files.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(secretFolder, file.name);
      const fileName = file.name.slice(0, file.name.lastIndexOf("."));
      const fileExt = file.name.slice(file.name.lastIndexOf(".") + 1);
      fs.stat(filePath, (err, stat) => {
        console.log(`${fileName} - ${fileExt} - ${stat.size / 1000}kb`);
      });
    }
  });
});