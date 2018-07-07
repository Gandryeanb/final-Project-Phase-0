var locChampStr = [0,1,2,3,4]
var locChampStrUrl = ['img/01.png','img/02.png','img/03.png','img/04.png','img/05.png']

function displayChar(x) {
    var imgDisplay = document.getElementById('displayLeft').src = locChampStrUrl[x]
}
var a = 'img/m-01.png'
function toBattle() {
    var pickChamp = document.getElementsByClassName('pick-pict')
    var rightEnemy = document.getElementById('displayRigth').src = a
    var hideStart = document.getElementsByClassName('start')[0].style.display = 'none'
    var displayattack = document.getElementsByClassName('attack')[0].style.display = 'block'
    var displaystatus = document.getElementsByClassName('status')[0].style.display = 'block'
    // rightEnemy
    pickChamp[0].style.display = 'none'
}

var tempInfoP = [[[HpE -= 5],[],[]],[[HpE -= 1],[stunnedE++],[]],[[HpE -=10],[stunnedH++],[]],[[],[],Def = [2,2]]]
var ocuInfoP = [3+'bleeding 1 x 2 turn','hp + 1-9, hp - 1 x 2 turn','enemy DMG -2','DMG + 2 x 3 turn']
var bhInfoP = [4 + 'bleeding 2 x 2 turn',1+ 'stun x 1 turn',1 + 'riposte 3 DMG x 2 turn',1 + 'open vein + 2 DMG x 2 turn']
var leppInfoP = [5,'skip +  7 DMG next turn','DEF + 2 x 2 turn',7 + 'stunned 1']
var pdInfoP = [1 + 'poison 2 DMG x 3 turn',2 + '2 DMG x 2 turn','heal 2HP delete buff',1 + 'stun x 2 turn']
var enemy = [HpH -= 3]
var infoSkillClassPseudo = [tempInfo,ocuInfo,bhInfo,leppInfo,pdInfo]
var sellectedChampNum = 0
var sellectedSkillNum = 0

// sellected champ
function sellectedChamp(num) {
    sellectedChampNum = num
}

// sellected skill 

function sellectedSkill(num) {
    sellectedSkillNum = num
}

// status hero and enemy
var Hero = {
    HpH : 20,
    stunnedH : 0,
    Def : [0,0]
}
var enemy = {
    HpE : 30,
    stunnedE: 0,
    bleedingE :[[0,0]],
    poisonE : [[0,0]],
    dmgE : 3
}

// var Hprefresh = setInterval(Hero.HpH, 1000)

function resetStatus() {
    HeroH = {
        HpH : 20,
        stunnedH : 0
    }
    enemy = {
        HpE : 30,
        stunnedE: 0,
        bleedingE :[[0,0]],
        poisonE : [[0,0]],
        dmgE : 3
    }
}

function enemy() {
    return HpH -= 3    
}


function attack() {
    // var dmg = infoSkillClassPseudo[sellectedChampNum][sellectedSkillNum]
    // var stat = infoSkillClass[sellectedChampNum][sellectedSkillNum]
    // var buff = infoSkillClass[sellectedChampNum][sellectedSkillNum]

    console.log(tempInfoP)
    // console.log(infoSkillClass[0])
}