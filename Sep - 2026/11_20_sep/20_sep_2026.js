// @Writer Abaidullah
// @Given i)file Size , ii) File unit iii) Drive Size GB

// @required The number of files the hard drive can store 

// @access public (can be used)

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const file_units = ["B", "KB", "MB", "GB"].reverse();
  console.log(file_units);
  

  for (let i = 0; i < file_units.indexOf(fileUnit); i++) {
    driveSizeGb *= 1000;
  }

  return Math.floor(driveSizeGb / fileSize);
}

console.log(numberOfFiles("500","KB",1));
