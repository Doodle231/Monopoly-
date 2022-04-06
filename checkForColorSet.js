
      checkForColorSet= () => {
  
        
        let brownColorSet = false; 
      if ( this.propertyowned.includes(SpaceObjects.balticavenue) && 
       this.propertyowned.includes (SpaceObjects.mediterennan)){
         brownColorSet = true;
        
      
      }
      
      
      let lightBlueSet = false; 
      if ( this.propertyowned.includes(SpaceObjects.orientalAvenue) && 
       this.propertyowned.includes (SpaceObjects.vermont)&& 
       this.propertyowned.includes (SpaceObjects.connecticut)){
         lightBlueSet = true;
      
      }
      
      
      let pinkSet = false; 
      if ( this.propertyowned.includes(SpaceObjects.stcharlesPlace) && 
       this.propertyowned.includes (SpaceObjects.vairginia)&& 
       this.propertyowned.includes (SpaceObjects.statesavenue)){
        pinkSet = true;
      
      }
      
      
      let orangeSet = false; 
      if ( this.propertyowned.includes(SpaceObjects.stJamesPlace) && 
       this.propertyowned.includes (SpaceObjects.tenessee)&& 
       this.propertyowned.includes (SpaceObjects.newYork)){
        orangeSet = true;
      
      }
      
      let redSet = false; 
      if ( this.propertyowned.includes(SpaceObjects.indiana) && 
       this.propertyowned.includes (SpaceObjects.illinois)&& 
       this.propertyowned.includes (SpaceObjects.kentucky)){
        redSet = true;
      
      }
      
      let yellowSet = false; 
      if ( this.propertyowned.includes(SpaceObjects.atlantic) && 
       this.propertyowned.includes (SpaceObjects.ventur)&& 
       this.propertyowned.includes (SpaceObjects.marvinGardens)){
         yellowSet = true;
      
      }
      
      let greenSet = false; 
      if ( this.propertyowned.includes(SpaceObjects.pacific) && 
       this.propertyowned.includes (SpaceObjects.northCarolina)&& 
       this.propertyowned.includes (SpaceObjects.pennsylvania)){
        greenSet = true;
      
      }
      
      let darkBlueSet = false; 
      if ( this.propertyowned.includes(SpaceObjects.parkPlace) && 
       this.propertyowned.includes (SpaceObjects.boardWalk)){
         darkBlueSet = true
         
      }
      
      let colorSets = [brownColorSet, lightBlueSet, pinkSet, orangeSet, redSet, 
      yellowSet, greenSet, darkBlueSet]
      
      let canBuyHouse = false; 
      
      for (let i = 0; i < colorSets.length; i++) {
      if (colorSets[i] === true ) {
          canBuyHouse = true; 
         
          }   
      }
      
      
        return this 
     },
