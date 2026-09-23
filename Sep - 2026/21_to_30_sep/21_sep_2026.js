// @Writer Abaidullah
// @Given i)video Size, ii)video unit iii)drive size iv)drive unit 

// @required The number of videos the hard drive can store 

// @access public (can be used)

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
    const units=["TB","GB","MB","KB","B"];
    let start=units.indexOf(driveUnit);
    let end=units.indexOf(videoUnit);

    if(!(driveUnit=="GB"|driveUnit=="TB")){
        return "Invalid drive unit";
    }
    if(!["B","KB","MB","GB"].includes(videoUnit)){
        return "Invalid video unit";
    }else{

        for(let i=start;i<end;i++){
            driveSize*=1000;
        }
    }
    
  return Math.floor(driveSize/videoSize);
};


console.log(numberOfVideos(500, "MB", 100, "GB"));
console.log(numberOfVideos(1.5, "GB", 2.2, "TB"));
