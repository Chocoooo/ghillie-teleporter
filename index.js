module.exports = function GhillieTeleporter(dispatch) {
    
    //Player's CID
    let CID = null;
    //Coordinates when entering GG
    let coordX = 54997;
    let coordY = 116171;
    let coordZ = 4517;
    let coordW = 0;
    
    //Hooking player's CID
    dispatch.hook('S_LOGIN', 1, event => {
            CID = event.cid;
    })
    
    //Hooking player's coordinates
    dispatch.hook('S_SPAWN_ME', 1, event => {
        //Checking if coordinates are the GG entrance ones
        if(coordX == event.x && coordY == event.y && coordZ == event.z && coordW == event.w)
        {
            ggTele();
            return false;
        }
    })
    
    //Function to tele in front of the GG boss
    function ggTele() {
        dispatch.toClient('S_SPAWN_ME', 1, {
        target: CID,
        x: 52227.5078125,
        y: 117334.3125,
        z: 4386,
        w: 16072,
        alive: 1,
        unk: 0 
        })
    }
}