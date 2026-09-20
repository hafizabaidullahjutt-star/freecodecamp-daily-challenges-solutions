// @Writer Abaidullah
// @Given i)Photos in MB ii) harddrive size in GB 

// @required 1 gigabyte equals 1000 megabytes.Return the number of whole photos the drive can store.

// @access public (can be used)

function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {

  return Math.floor((hardDriveSizeGb*1000)/photoSizeMb);
}