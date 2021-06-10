const fs = require('fs');
const path = require('path');

// 3 Difference
// rename(..., callback(error, data))
// try { reanmeSync(...) } catch (e) {}
// promises.rename().then().catch(0)

try {
  fs.renameSync(
    path.join(__dirname, 'file.txt'),
    path.join(__dirname, 'file-new.txt')
  );
} catch (error) {
  console.error(error);
}

fs.rename(
  path.join(__dirname, 'file-new.txt'),
  path.join(__dirname, 'file.txt'),
  console.error
);

fs.promises
  .rename(
    path.join(__dirname, 'file.txt'),
    path.join(__dirname, 'file-new.txt')
  )
  .then(() => console.log('done'))
  .catch(console.error);
