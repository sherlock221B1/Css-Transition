/*
    *position relative and position absolute*

**position static 
position static က html element တွေမှာ နဂိုက ပါလာတဲ့ default valueဖြစ်တယ်။
position static ဆိုရင် top ,bottom, left, right စသည်ဖြင့်ပေးလည်းနေရာမရွေ့။

**position ralative
positon relative ပေးလိုက်မယ် ဆိုရင် သူက တခြားကောင်တွေအပေါ်မှာ ဘာမှသက်ရောက်မှုမရှိဘူး
သူနေရာရွေ့သွားလည်း တခြားကောင်တွေက သူ့နေရာကိုဝင်ယူမှာမဟုတ်ဘူး။
သူ့ကို top, bottom, left, right စသည်ဖြင့်ပေးလိုက်မယ်ဆိုရင် မူလရှိနေတဲ့ နေရာကနေ စပြီးရွေ့သွားမယ်။
တခြားကောင်တွေကလည်း သူ့နေရာကို ဝင်ယူမှာ မဟုတ်ဘူး။

**position absolute 
positionn absolute ပေးလိုက်ရင် သူ့ကအပေါ်ကိုကြွတက်သွားပြီး သူ့အောက်ကို သူ့နေရာကို သူ့နောက်ကကောင်ကဝင်လာမယ်။
သူ့ကို top, bottom, left, right  စသည်ဖြင့်ပေးလိုက်ရင် သူက သူ့မိဘကို ကြည့်မယ်။ သူ့မိဘက static မဟုတ်ရင် သူ့မိဘနေရာက စပြီးရွေ့မယ်။
သူ့မိဘက static ဖြစ်နေရင် အပေါ်ကိုတက်သွားကြည့်မယ်။ အပေါ်ကကောင်က(သူ့မိဘရဲ့မိဘက) static မဟုတ်ရင် အဲ့နေရာက စပြီးရွေ့မယ်။
static ဖြစ်နေရင် အပေါ်ကို ထပ်တက်မယ်။ ဒီလိုတက်တက်သွားပြီး အကုန်လုံး static တွေဖြစ်နေရင် နောက်ဆုံး body ကိုရောက်တဲ့အခါ 
အဲ့ကနေပြီး ုစပြီးရွေ့မယ်။

*** MDN position website မှာ position တွေအကြောင်း အသေးစိတ်လေ့လာလို့ရ။

*/

/*
    *document.querySelector*
querySelector ကိုသုံးပြီးကြိုက်တာကို select လုပ်လို့ရ။
class ကို select လုပ်ချင်ရင် ရှေ့မှာ . ခံ
id ကို select လုပ်ချင်ရင် ရှေ့မှာ # ခံ
တစ်ခြားကောင်တွေကို လည်း querySelector  သုံးပြီး select လုပ်လို့ရ။

** class တွေကို select လုပ်တဲ့ အခါ querySelector ကိုသုံးရင် ပထမဆုံးတွေ့တဲ့ကောင်ကို select လုပ်သွားမယ်။
   querySelectorAllကို သုံးရင် class တူတဲ့အကုန်လုံးကို  NodeList (array နဲ့တူတဲ့ကောင် array တော့မဟုတ်)
   ထဲမှာ ထည့်ပေးသွားမယ်။
   ယူသုံးတဲ့အခါ ကိုယ်သုံးချင်တဲ့ ကောင်ရဲ့ index ကိုထည့်ပေးရမယ်။

*/

const transitionDivTag = document.querySelector(".transition");
const transitionButtonTag = document.querySelector(".transitionButton");


const addTheClassList = () => {
    transitionDivTag.classList.add("increaseWidth")
}

transitionButtonTag.addEventListener("click", addTheClassList);

