const PROP = ['hair', 'hairtype', 'sex', 'mood', 'glasses','age','beard','img']
const VALUE = ['blond', 'black', 'red', 'brown', 'white', 'no','yes', 'short', 'long', 'man', 'woman', 'angry', 'neutral', 'happy','old','notold',]

let peopleCARDS = let people =[ {hair: 'blond', hairtype: 'short',sex:'man', mood:'angry', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/1 man blonde angry shorthair.jpg'},
{hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/2 girl blond nohappy longhair.jpg'},
{hair: 'black', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/3 girl blackhair longhair nohappy.jpg'},
{hair: 'red', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/4 girl redhair nohappy longhair.jpg'},
{hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/5 girl blond nohappy longhair.jpg'},
{hair: 'black', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/6 man shorthair blackhair happy.jpg'},
{hair: 'red', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/7 girl redhair happy longhair.jpg'},
{hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/8 man blondhair nohappy shorthair.jpg'},
{hair: 'black', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/9 man blackhair nohappy shorthair.jpg'},
{hair: 'brown', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/10 man brownhair happy shorthair.jpg'},
{hair: 'blond', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/11 man blondhair happy shorthair.jpg'},
{hair: 'red', hairtype: 'long', sex: 'woman', mood: 'angry', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/12 girl angry redhair longhair.jpg'},
{hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/13 girl blondhair happy longhair.jpg'},
{hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral',glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/14 girl brownhair happy longhair.jpg'},
{hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral',glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/15 man blondhair nohappy shorthair.jpg'},
{hair: 'blond', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/16 man blondhair happy shorthair.jpg'},
{hair: 'white', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/17 man whitehair glasses shorthair nohappy.jpg'},
{hair: 'blond', hairtype: 'short', sex: 'woman', mood: 'happy', glasses: 'yes', age:'notold', beard: 'no', img: 'assets/images/characters/18 girl glasses blondhair happy shorthair.jpg'},
{hair: 'black', hairtype: 'short', sex: 'man', mood: 'happy', glasses: 'yes', age:'notold', beard: 'no', img: 'assets/images/characters/19 man blondhair happy shorthair glasses.jpg'},
{hair: 'blond', hairtype: 'short', sex: 'man', mood: 'neutral', glasses: 'no', age:'notold', beard: 'yes', img: 'assets/images/characters/20 man blondhair beard shorthair nohappy.jpg'},
{hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/21 girl colorhair hairstyle nohappy longhair.jpg'},
{hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/22 girl blondhair hairstyle longhair nohappy.jpg'},
{hair: 'no', hairtype: 'no', sex: 'man', mood: 'neutral', glasses: 'no', age:'old', beard: 'no', img: 'assets/images/characters/23 man nohair nohappy old.jpg'},
{hair: 'no', hairtype: 'no', sex: 'man', mood: 'neutral', glasses: 'no', age:'old', beard: 'no', img: 'assets/images/characters/24 man nohair nohappy old.jpg'},
{hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/25 girl blondhair nohappy longhair.jpg'},
{hair: 'blond', hairtype: 'long', sex: 'man', mood: 'happy', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/26 man blondhair longhair happy.jpg'},
{hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'neutral', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/28 man angry brunette shorthair.jpg'},
{hair: 'brown', hairtype: 'short', sex: 'man', mood: 'angry', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/28 man angry brunette shorthair.jpg'},
{hair: 'brown', hairtype: 'long', sex: 'woman', mood: 'happy', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/29 girl brunette happy longhair.jpg'},
{hair: 'blond', hairtype: 'long', sex: 'woman', mood: 'angry', glasses: 'no', age:'notold', beard: 'no', img: 'assets/images/characters/30 girl nohappy blond longhair.jpg'}
]



//class deck {
//    constructor (peopleCARDS){
//        this.cards = cards
//    }
//}

//class Card{
//    constructor(prop, value){
//        this.prop = prop
//        this.value = value
//    }
//}

function freshDeck(){
    return peopleCARDS.flatmap(prop =>{
        return prop.map(value => {
            return new Card(prop, value)
        })
    })
}