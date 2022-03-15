function distanceFromHqInBlocks(block){
    return Math.abs(block - 42)
}
function distanceFromHqInFeet(location){
  //  return Math.abs((location - 42) * 264)
  const blocks = distanceFromHqInBlocks(location)
  return (blocks * 264)
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264
}
function calculatesFarePrice(start, destination){
    // calculated distance in feet
    let distance = distanceTravelledInFeet(start, destination)
    // let price = calculatesFarePrice(start, destination)
    if (distance <= 400){
        return 0
    }
    if (distance < 2000){
        return (distance - 400) * .02
    }
    // distance is btwn 2000 and 25000
    if (distance > 2000 && distance <= 2500){
        return 25
    }
    if (distance >= 2500){
        return 'cannot travel that far'
    }
    
}