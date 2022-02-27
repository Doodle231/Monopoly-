const SpaceObjects = (price, name, rent , colorsetrent, house1rent, house2rent, 
    house3rent, house4rent, hotelrent, eachhousecost) => {
      
      return { 
        price: price, 
        houses: 0,
        hotels: 0, 
        owner: "The bank",
        name:name, 
        rent: rent,
        colorsetrent:colorsetrent, 
        house1rent:house1rent, 
        house2rent:house2rent, 
        house3rent:house3rent, 
        house4rent:house4rent, 
        hotelrent:hotelrent, 
        eachhousecost:eachhousecost, 
        
      }    
     
      }
    
    const go = SpaceObjects(200,"go", 0, 0, 0, 0, 0, 0, 0, 0)
    const mediterennan = SpaceObjects(50, "mediternnean", 2, 4, 10, 30, 90, 160, 250,50)
    const communitychest = SpaceObjects(0,"Community Chest", 0,0,0,0,0,0,0)
    const balticavenue = SpaceObjects(50, " Baltic Avenue " , 4, 8, 20, 60, 180, 320, 450,50)
    const incometax = SpaceObjects(-200,"Income Tax",0,0,0,0,0,0,0)
    const readingRailRoad = SpaceObjects(200, "Reading Railroad", 25, 200, 25,50,100,200, 0)
    const orientalAvenue = SpaceObjects(100, " Oriental Avenue ", 6, 12, 30,90, 270,400,550,50 )
    const chance = SpaceObjects(0, "Chance",0,0,0,0,0,0,0)
    const vermont = SpaceObjects(100, " Vermont Avenue ", 6, 12, 30, 90, 270, 400, 550,50)
    const connecticut = SpaceObjects(120, " Conneticut Avenue ",8, 16,40,100,300,450,600,50)
    const justVisiting = SpaceObjects(0, "Just Visiting",0,0,0,0,0,0,0)
    const stcharlesPlace = SpaceObjects(140, "St. Charles Place " , 10, 20, 50,150, 450, 625, 750,100 )
    const electricCompany = SpaceObjects(150, " Electric Company")
    const statesavenue = SpaceObjects(140, " States Avenue ", 10, 20, 50, 150, 450, 625, 750,100)
    const virginia = SpaceObjects(160, " Virgina Avenue ", 12, 24, 60, 180, 500, 700, 900,100)
    const pennRR = SpaceObjects(200, " Penn Railroad", 25, 200, 25,50,100,200, 0)
    const stJamesPlace = SpaceObjects(180, "St. James Place ", 14, 28,70,200, 550,750,950,100)
    const tenessee = SpaceObjects(180, " Tenessee Avenue", 14, 28, 70, 200,550,750, 950,100)
    const newYork = SpaceObjects(200, " New York Avenue", 16, 32, 80, 220, 600, 800, 1000,100)
    const freeParking = SpaceObjects(0, " Free Parking",0,0,0,0,0,0,0,)
    const kentucky = SpaceObjects(220, " Kentucky Avenue ", 18, 36, 90,250, 700, 875, 1050,150 )
    const indiana = SpaceObjects(220, " Indiana Avenue ", 18, 36, 90,250, 700, 875, 1050,150 )
    const illinois = SpaceObjects (220, " Illinois Avenue",300, 20, 400, 100, 300, 750, 925, 1100,150)
    const band0 = SpaceObjects(200, "B & O Railroad",25, 200, 25,50,100,200, 0)
    const atlantic = SpaceObjects(200," Atlantic Avenue " ,22, 44, 110,330, 800, 975, 1150,150 )
    const ventur = SpaceObjects(200, " Ventur Avenue " ,22, 44, 110,330, 800, 975, 1150,150)
    const waterworks = SpaceObjects(120, " Water Works ")
    const marvinGardens = SpaceObjects(240, " Marvin Gardens" ,24, 48, 120, 360, 850, 1025, 1200,150)
    const jail = SpaceObjects(0, "Jail",0,0,0,0,0,0,0)
    const pacific = SpaceObjects(300, " Pacific Avenue " , 26, 52, 130, 390, 900, 1100, 1275,200)
    const northCarolina = SpaceObjects(300, " North Carolina", 26, 52, 130, 390, 900, 1100, 1275,200)
    const pennsylvania = SpaceObjects(320, "Pennsylvania ", 28, 56, 150, 450, 1000, 1200, 1400,200)
    const shortLine = SpaceObjects(200, " Short Line RailRoad",25, 200, 25,50,100,200, 0)
    const parkPlace = SpaceObjects(350, " Park Place", 35, 70, 175, 500, 1100, 1300, 1500,200)
    const luxuryTax = SpaceObjects(-100," Luxury Tax",0,0,0,0,0,0,0 )
    const boardWalk = SpaceObjects(400, " Board Walk", 50, 100, 200, 600, 1400, 1700, 2000,200)
 
    communitychest.owner = "Community Chest"
    chance.owner = "Chance"
    jail.owner = "Jail"
    

    let spacesArray = [go, mediterennan, communitychest, balticavenue, incometax, readingRailRoad, 
      orientalAvenue, chance, vermont, connecticut, justVisiting, stcharlesPlace, electricCompany, statesavenue, virginia, 
      pennRR, stJamesPlace, communitychest, tenessee, newYork, freeParking, kentucky, chance, indiana, illinois, 
      band0, atlantic, ventur, waterworks, marvinGardens  ,jail, pacific, northCarolina,communitychest,  pennsylvania, shortLine, chance, parkPlace, 
      luxuryTax, boardWalk]

        
    export {SpaceObjects}
    export {spacesArray}
    