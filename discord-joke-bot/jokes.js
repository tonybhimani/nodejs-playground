// https://www.buzzfeed.com/kaitlinstevens/funny-knock-knock-jokes

const jokes = [

`Knock knock
*Who's there?*
Owls
*Owls who?*
They sure do!`,

`Knock knock
*Who's there?*
Abe Lincoln
*Abe Lincoln who?*
You don't recognize me??!!`,

`Knock knock
*Who's there?*
Adorable
*Adorable who?*
A-door-bell don't work, that's why I knocked!`,

`Knock knock
*Who's there?*
Goliath
*Goliath who?*
Go lieth thee down, thou looks tired!`,

`Knock knock
*Who's there?*
Cargo
*Cargo who?*
CAR GO BEEP BEEP!`,

`Knock knock
*Who's there?*
Britney Spears
*Britney Spears who?*
Knock knock
*Who's there?*
Britney Spears. OOPS! I DID IT AGAIN!`,

`Knock knock
*Who's there?*
Daisy
*Daisy who?*
DEY SEE ME ROLLIN THEY HATIN`,

`Knock knock
*Who's there?*
Kenya
*Kenya who?*
Kenya open the door?`,

`Knock knock
*Who's there?*
The
*The Who?*
YEAAAAAAAAAAAAAAAHHHHH!!! (in the style of "Won't Get Fooled Again" by The Who)`,

`Knock knock
*Who's there?*
I eat mop
*I eat mop who?*
Ew`,

`Knock knock
*Who's there?*
Lettuce! 
*Lettuce who?*
Lettuce in`,

`Knock knock
*Who's there?*
Yoda lady
*Yoda lady who?*
I didn't know you could yodel!`,

`Knock knock
*Who's there?*
Europe
*Europe who?*
No, you're a poo!`,

`Knock knock
*Who's there?*
You
*You who?*
Big summer blowout`,

`Knock knock
*Who's there?*
Interrupting cow
*Interrupting cow wh—*
MOO!`,

`Knock knock
*Who's there?*
To
*To who?*
It's to whom`,

`Knock, knock
*Who's there?*
Cook
*Cook who?*
Yeah, you do sound kinda crazy`,

`Knock knock
*Who's there?*
A week.
*A week who?*
Yeah, we coo'`,

`Knock knock
*Who's there?*
Wah
*Wah who?*
It's-a me Mario!`,

`Knock knock
*Who's there?*
HIPAA
*HIPAA who?*
I'm sorry, I'm not authorized to release that information`,

`Knock knock
*Who's there?*
Control freak
*Con–*
–Okay, now you say, "Control freak who?"`,

`Knock knock
*Who's there?*
Dejav
*Dejav who?*
Knock, knock`,

`Knock knock
*Who's there?*
Nobel
*Nobel who?*
There's no bell...that's why I knocked`,

`Knock knock
*Who's there?*
Art
*Art who?*
R2D2!`,

`Knock knock
*Who's there?*
Shamp
*Shamp who?*
Does my hair really look that dirty?`,

`Knock knock
*Who's there?*
Doctor
*Doctor who?*
Oh my gosh, I'm such a big fan!`,

`Knock knock
*Who's there?*
Hike
*Hike who?*
I didn't know you liked Japanese poetry!`,

`Knock knock
*Who's there?*
Yah
*Yah who?*
No, I use Google`,

`Knock knock
*Who's there?*
Colin
*Colin who?*
Colonization! Just kidding, colonizers don't knock before coming in`,

`Knock knock
*Who's there?*
Opportunity, and I don't knock twice!`,

`Knock knock
*Who's there?*
Thermos
*Thermos who?*
Thermos be a better knock knock joke than this!`,

`Knock knock
*Who's there?*
Norma Lee
*Norma Lee who?*
Normally I'd call first, but I had to see you!`,

`Knock knock
*Who's there?*
Mikey
*Mikey who?*
My key is lost - can you let me in?`,

`Knock knock
*Who's there?*
Hutch
*Hutch who?*
Bless you!`,

`Knock knock
*Who's there?*
Tat
*Tat who?
No thanks, I'm afraid of needles`,

`Knock knock
*Who's there?*
Cowsgo
*Cowsgo who?*
No, cows go MOO!`,

`Knock knock
*Who's there?*
Spell
*Spell who?*
W-h-o`,

`Knock knock
*Who's there?*
Cash
*Cash who?*
Nah, but I'll take some almonds if you got them`,

`Knock knock
*Who's there?*
Pecan
*Pecan who?*
Pecan somebody your own size!`,

`Knock knock
*Who's there?*
Fur
*Fur who?*
Fur you, I can be anyone`,

`Knock knock
*Who's there?*
Alien
*Alien who?*
Alien — wait, how many aliens do you know?`,

`Knock knock
*Who's there?*
Baby owl
*Baby owl who?*
Baby, I'll see you later at my place`,

`Knock knock
*Who's there?*
Disguise
*Disguise who?*
Dis guy is your boyfriend? You could do so much better`,

`Knock knock
*Who's there?*
Ida
*Ida who?*
Surely, it's pronounced Ida-ho?`,

`Knock knock
*Who's there?*
Urine
*Urine who?*
You're insecure; don't know what for`,

`Knock knock
*Who's there?*
Bacon
*Bacon who?*
Bae, can you give me a kiss?`,

`Knock knock
*Who's there?*
Wafer
*Wafer who?*
Wafer me — I'm coming!`,

`Knock knock
*Who's there?*
Radio
*Radio who?*
Radio not, here I come!`,

`Knock knock
*Who's there?*
Ariana Grande
*Ariana Grande who?*
Okay, boomer!`,

`Why did the chicken cross the road?
To get to the idiot's house
Knock knock
*Who's there?*
The chicken`,

`Knock knock
*Who's there?*
Anna Partridge
*Anna Partridge who?*
Anna Partridge in a pear tree!`,

`Knock knock
*Who's there?*
Madam
*Madam who?*
Ma damn foot is stuck in the door!`,

`Knock knock
*Who's there?*
Omar
*Omar who?*
Omargod, I have the wrong door!`,

`Knock knock
*Who's there?*
Leash
*Leash who?*
Leash you could do is open the door!`,

`Knock knock
*Who's there?*
Breaking dawn
*Breaking dawn who?*
I'm breaking dawn this door with my powerful vampire knocks!`,

`Knock knock
*Who's there?*
Beets
*Beets who?*
Beets me!`,

`Knock knock
*Who's there?*
Otto
*Otto who?*
Otto know, I've got amnesia`,

`Knock knock
*Who's there?*
Interrupting pirate
*Interrupting pir–*
ARRRRRRRRRRRR!`,

`Knock knock
*Who's there?*
Desiree
*Desiree who?*
Desiree of sunshine shining through my window`,

`Knock knock
*Who's there?*
Avenue
*Avenue who?*
Avenue heard this joke before?`,

`Knock knock
*Who's there?*
Forget
*Forget who?*
Forget you!`,

`Knock knock
*Who's there?*
Woo
*Woo who?*
Sounds like a party in there!`,

`Knock knock
*Who's there?*
A broken pencil
*A broken pencil who?*
Nevermind, there's no point`,

`Knock knock
*Who's there?*
Stopper
*Stopper who?*
Stop'er! She's running off with your newspaper!`,

`Knock knock
*Who's there?*
Moron
*Moron who?*
Moron that later, after these messages from our sponsors`,

`Knock knock
*Who's there?*
Dewey?
*Dewey who?*
Dewey have to keep telling silly jokes?`,

];

export function getRandomJoke() {
	return jokes[jokes.length * Math.random() | 0];
}