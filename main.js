var championName = ''
var chamName = document.getElementById('chamName')
var notif1 = document.getElementById('notif1')
var notif1P = notif1.getElementsByTagName('p')

function insertName() {
    var char = /[A-z0-9]/
    var opening = document.getElementsByClassName('opening')
    var pickChamp = document.getElementsByClassName('pick-pict')
    if (chamName.value.length === 0) {
        notif1P[0].innerHTML = 'Isi nama champion anda'
    } else if (char.test(chamName.value) !== true) {
        notif1P[0].innerHTML = 'Hanya boleh menggunakan huruf dan angka'
    } else {
        opening[0].style.display = 'none'
        pickChamp[0].style.display = 'block'
        championName = chamName.value
    }
}
var temp = document.getElementsByClassName('templar')
var ocu = document.getElementsByClassName('oculist')
var bh = document.getElementsByClassName('bountyHunter')
var lepp = document.getElementsByClassName('lepper')
var pd = document.getElementsByClassName('pleagueDoctor')
var locChamp = [temp,ocu,bh,lepp,pd]
var locChampStr = ['templar','oculist','bountyHunter','lepper','pleagueDoctor']
var locChampStrName = ['Templar','Oculist','Bounty Hunter','Lepper','Pleague Doctor']
var notif2 = document.getElementById('notif2')
var notif2H = notif2.getElementsByTagName('h3')

function pickClass(str) {
    var selected = document.getElementsByClassName(str)
    var x = locChampStr.indexOf(str)
    selected[0].style.background = 'rgb(172, 172, 172)'
    notif2H[0].innerHTML = championName + ' The ' + locChampStrName[x]
    var displayBattleButton = document.getElementsByClassName('start')[0].style.display = 'block'

    for (var i = 0; i < locChampStr.length; i++) {
        if ( i !== x) {
            locChamp[i][0].style.background = 'none'
        }
    }
}

var skillTemp = document.getElementsByClassName('skillTemplar')
var skillOcu = document.getElementsByClassName('skillOculist')
var skillBh = document.getElementsByClassName('skillBountyHunter')
var skillLepp = document.getElementsByClassName('skillLepper')
var skillPd = document.getElementsByClassName('skillPleagueDoctor')
var skillLocChamp = [skillTemp,skillOcu,skillBh,skillLepp,skillPd]
var skillLocChampStr = ['templar','oculist','bountyHunter','lepper','pleagueDoctor']
var notif3 = document.getElementById('notif3')
var notif3H = notif3.getElementsByTagName('h4')

var TempId = document.getElementsByClassName('skillTemplar')
var OcuId = document.getElementsByClassName('skillOculist')
var BhId = document.getElementsByClassName('skillBountyHunter')
var LeppId = document.getElementsByClassName('skillLepper')
var PdId = document.getElementsByClassName('skillPleagueDoctor')
var skillLocChampId = [TempId,OcuId,BhId,LeppId,PdId]
var skillLocChampStr = ['templar','oculist','bountyHunter','lepper','pleagueDoctor']
var h4 = document.getElementById('notif3').children[0]
var p = document.getElementById('notif3').children[1]

function skillInfo (str) {
    var x = skillLocChampStr.indexOf(str)
    skillLocChamp[x][0].style.display = 'block'
    h4.innerHTML = ""
    p.innerHTML = ""

    for (var i = 0; i < skillLocChampStr.length; i++) {
        if ( i !== x) {
            skillLocChamp[i][0].style.display = 'none'
            for (var j = 0; j < 4; j++) {
                skillLocChampId[i][0].children[j].style.background = 'none'
            }
        }

    }
    
    
}

