var TempId = document.getElementsByClassName('skillTemplar')
var OcuId = document.getElementsByClassName('skillOculist')
var BhId = document.getElementsByClassName('skillBountyHunter')
var LeppId = document.getElementsByClassName('skillLepper')
var PdId = document.getElementsByClassName('skillPleagueDoctor')
var skillLocChampId = [TempId,OcuId,BhId,LeppId,PdId]
var skillLocChampStr = ['templar','oculist','bountyHunter','lepper','pleagueDoctor']

var tempInfo = [{name :'Smite',info : 'DMG 5'},{name:'Stunning Blow',info:'DMG 1 and stun enemy for 1 turn'},{name:'Holy Lance',info:'DMG 10 and Stunned for 1 turn '},{name:'Bulwark of Faith',info:'Increase DEF by 2 in 2 turns'}]
var ocuInfo = [{name:'Sacrificial Stab',info:'DMG 3 and makes enemy bleeding 1 DMG/turn in 2 turn'},{name:'Wyrd Reconstruction',info:'Healing for 1-9 HP and bleeding 1 DMG/turn for 2 turn'},{name:'Weakening Curse',info:'Decrease enemy DMG by 2 for 2 turn'},{name:'Vulnerability Hex',info:'Increase DMG income on your enemy by 2 DMG on 3 turn'}]
var bhInfo = [{name:'Open Vein',info:'DMG 4 and makes enemy bleeding 2 DMG/turn in 2 turn'},{name:'Point Black Shot',info:'DMG 1 and stun enemy for 1 turn'},{name:"Duelist's Advance",info:'DMG 1 and activated riposte by 2 turn(DMG 3)'},{name:'Grapeshot Blast',info:'DMG 1 and increase damage your skill Open Vein by 2'}]
var leppInfo = [{name:'Chop',info:'DMG 5'},{name:'Revenge',info:'Skip turn and increase DMG next turn by 7 '},{name:'Withstand',info:'Decrease DMG income by 2 in 2 turn'},{name:'Hew',info:'DMG 7 and stunned for 1 turn'}]
var pdInfo = [{name:'Plague Grenade',info:'DMG 1 and poisoning your enemy by 2 DMG for 3 turn'},{name:'Incision',info:'DMG 2 and makes your enemy bleeding by 2 DMG in 2 turn'},{name:'Battlefield Medicine',info:'Healing 1HP and remove Bleeding effect'},{name:'Noxious Blast',info:'DMG 1 and stun your enemy by 2 turn'}]
var infoSkillClass = [tempInfo,ocuInfo,bhInfo,leppInfo,pdInfo]

// var infoSkillClassDetail = [tempInfoD,ocuInfoD,bhInfoD,leppInfoD,pdInfoD]

function skillDetail (str,num) {
    var h4 = document.getElementById('notif3').children[0]
    var p = document.getElementById('notif3').children[1]

    var x = skillLocChampStr.indexOf(str)
    skillLocChampId[x][0].children[num].style.background = 'rgb(172, 172, 172)'    
    h4.innerHTML = infoSkillClass[x][num].name
    p.innerHTML = '<br>'+ infoSkillClass[x][num].info
    for (var i = 0; i < 4; i++) {
        if ( i !== num) {
            skillLocChampId[x][0].children[i].style.background = 'none'
        }
    }
}