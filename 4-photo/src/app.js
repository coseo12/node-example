const path = require('path');
const fs = require('fs');
// const os = require('os');

const folder = process.argv[2];
const workingDir = path.join(__dirname, 'pictures', folder);
if (!folder || !fs.existsSync(workingDir)) {
  console.error(`Please enter folder name in pictures`);
  return;
}

const videoDir = path.join(workingDir, 'video');
const captureDir = path.join(workingDir, 'captured');
const duplicateDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir);
!fs.existsSync(duplicateDir) && fs.mkdirSync(duplicateDir);

const isVideoFile = file => {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
};
const isCaptureFile = file => {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
};
const isDuplicateFile = (files, file) => {
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }
  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find(f => f.includes(edited));
  return !!found;
};

const move = (file, targetDir) => {
  console.log(`Move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises
    .rename(oldPath, newPath) //
    .catch(console.error);
};

const processFiles = files => {
  files.forEach(file => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCaptureFile(file)) {
      move(file, captureDir);
    } else if (isDuplicateFile(files, file)) {
      move(file, duplicateDir);
    }
  });
};

fs.promises
  .readdir(workingDir) //
  .then(processFiles)
  .catch(console.error);
